var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Uid from './uid';

var UEDITOR_LOADED_KEY = '__BEE_UEDITOR_LOADED_STATUS__';

// ueditor 默认值
var initConfig = {
  autoClearinitialContent: false,
  autoFloatEnabled: true, // 是否保持 toolbar 滚动时不动
  focus: true,
  wordCount: true,
  elementPathEnabled: false,
  pasteplain: false, // 是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
  initialFrameWidth: 640, // 初始化编辑器宽度
  initialFrameHeight: 200,
  maximumWords: 10000
};

var RichText = function (_React$Component) {
  _inherits(RichText, _React$Component);

  function RichText(props) {
    _classCallCheck(this, RichText);

    var _this = _possibleConstructorReturn(this, (RichText.__proto__ || Object.getPrototypeOf(RichText)).call(this, props));

    _this._inited = false;
    _this.initRichText = function () {
      if (_this._inited) return
      var UE = window.UE;
      var target = document.getElementById(_this.uuid);

      if (!UE || !target) {
        return false;
      }

      _this._inited = true;

      var _this$props = _this.props,
          value = _this$props.value,
          editorConfig = _this$props.editorConfig;

      var conf = _extends({}, initConfig, editorConfig);
      var editor = new UE.ui.Editor(conf);
      _this.editor = editor;

      editor.addListener('contentChange', function () {
        _this.onChange();
      });

      editor.addListener('blur', function () {
        _this.onBlur();
      });

      editor.render(target);
      editor.ready(function () {
        editor.setContent(value);
      });
      _this.props.getEditorInstance(_this.editor);
    };

    _this.onChange = function () {
      var value = _this.editor.getContent();
      _this.props.onChange && _this.props.onChange(value);
    };

    _this.onBlur = function () {
      var value = _this.editor.getContent();
      _this.props.onBlur && _this.props.onBlur(value);
    };

    _this.uuid = 'bee-' + Uid();
    console.log(_this.uuid);
    return _this;
  }

  _createClass(RichText, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var timer = null;

      if (window.UE) {
        this.initRichText();
      } else {
        timer = setInterval(function () {
          var status = window[UEDITOR_LOADED_KEY];
          if (status === 2) {
            clearInterval(timer);
            _this2.initRichText();
          } else if (status !== 1) {
            _this2.loadUEditorScript();
          }
        }, 50);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.editor) return;
      this.editor.destroy();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      if (value !== this.props.value && this.editor) {
        this.editor.setContent(value);
      }
    }
  }, {
    key: 'loadUEditorScript',
    value: function loadUEditorScript() {
      var _this3 = this;

      if (window[UEDITOR_LOADED_KEY] !== undefined) {
        return;
      }
      window[UEDITOR_LOADED_KEY] = 1; // 加载中
      var _props = this.props,
          ueditorHomeUrl = _props.ueditorHomeUrl,
          ueditorIframeUrl = _props.ueditorIframeUrl,
          ueditorUrl = _props.ueditorUrl,
          ueditorConfigUrl = _props.ueditorConfigUrl;


      window.UEDITOR_HOME_URL = ueditorHomeUrl;
      window.UEDITOR_IFRAME_URL = ueditorIframeUrl;

      this.createScriptDom(ueditorConfigUrl, function () {
        _this3.createScriptDom(ueditorUrl, function () {
          window[UEDITOR_LOADED_KEY] = 2; // 加载完成
        });
      });
    }
  }, {
    key: 'createScriptDom',
    value: function createScriptDom(url, callback) {
      var scriptDom = document.createElement('script');
      scriptDom.type = 'text/javascript';
      scriptDom.async = true;
      scriptDom.src = url;

      scriptDom.onload = function () {
        callback();
      };
      document.body.appendChild(scriptDom);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          prefix = _props2.prefix,
          className = _props2.className;

      return React.createElement(
        'div',
        { className: prefix + '-richtext ' + className },
        React.createElement('div', { id: this.uuid })
      );
    }
  }]);

  return RichText;
}(React.Component);

RichText.defaultProps = {
  value: '',
  onChange: function onChange() {},
  ueditorUrl: 'https://uso.oschina.io/react-ueditor-demo/ueditor.all.js',
  ueditorConfigUrl: 'https://uso.oschina.io/react-ueditor-demo/ueditor.config.js',
  ueditorHomeUrl: '',
  ueditorIframeUrl: '',
  editorConfig: {}, // ueditor 默认值
  className: '',
  prefix: 'bee',
  getEditorInstance: function getEditorInstance() {}
};
export default RichText;