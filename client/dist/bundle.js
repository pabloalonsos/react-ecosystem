webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(157);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(158);
	
	var _reactRedux = __webpack_require__(167);
	
	var _reduxReactRouter = __webpack_require__(176);
	
	var _history = __webpack_require__(231);
	
	__webpack_require__(256);
	
	var _routes = __webpack_require__(260);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _reducers = __webpack_require__(274);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var combinedReducers = (0, _redux.combineReducers)(_extends({
	    router: _reduxReactRouter.routerStateReducer
	}, _reducers2['default']));
	
	var prodCreateStore = (0, _reduxReactRouter.reduxReactRouter)({
	    routes: _routes2['default'],
	    createHistory: _history.createHistory
	})(_redux.createStore);
	
	var store = prodCreateStore(combinedReducers);
	
	_reactDom2['default'].render(_react2['default'].createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2['default'].createElement(_reduxReactRouter.ReduxRouter, null)
	), document.getElementById('root'));

/***/ },

/***/ 256:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(180);
	
	var _containers = __webpack_require__(261);
	
	var routes = _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', component: _containers.Main },
	    _react2['default'].createElement(_reactRouter.IndexRoute, { component: _containers.Dashboard }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'settings', component: _containers.Settings }),
	    _react2['default'].createElement(_reactRouter.Redirect, { from: '*', to: '/' })
	);
	
	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _main = __webpack_require__(262);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _dashboard = __webpack_require__(263);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	var _settings = __webpack_require__(273);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	exports['default'] = {
	    Main: _main2['default'],
	    Dashboard: _dashboard2['default'],
	    Settings: _settings2['default']
	};
	module.exports = exports['default'];

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(180);
	
	var Main = (function (_Component) {
	    _inherits(Main, _Component);
	
	    function Main() {
	        _classCallCheck(this, Main);
	
	        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Main, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { to: '/' },
	                    'Dashboard'
	                ),
	                _react2['default'].createElement(
	                    'span',
	                    null,
	                    ' || '
	                ),
	                _react2['default'].createElement(
	                    _reactRouter.Link,
	                    { to: '/settings' },
	                    'Settings'
	                ),
	                this.props.children
	            );
	        }
	    }]);
	
	    return Main;
	})(_react.Component);
	
	Main.propTypes = {
	    children: _react.PropTypes.node.isRequired
	};
	
	exports['default'] = Main;
	module.exports = exports['default'];

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(158);
	
	var _reactRedux = __webpack_require__(167);
	
	var _reactImmutableProptypes = __webpack_require__(264);
	
	var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);
	
	var _constants = __webpack_require__(266);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _actions = __webpack_require__(267);
	
	var todoActions = _interopRequireWildcard(_actions);
	
	var _components = __webpack_require__(268);
	
	function selectTodos(todos, visibilityFilter) {
	    switch (visibilityFilter.get('filter')) {
	        case _constants2['default'].VISIBILITY_FILTERS.SHOW_ALL:
	            return todos;
	        case _constants2['default'].VISIBILITY_FILTERS.SHOW_COMPLETED:
	            return todos.filter(function (todo) {
	                return todo.get('completed');
	            });
	        case _constants2['default'].VISIBILITY_FILTERS.SHOW_ACTIVE:
	            return todos.filter(function (todo) {
	                return !todo.get('completed');
	            });
	        default:
	            return todos;
	    }
	}
	
	var Main = (function (_Component) {
	    _inherits(Main, _Component);
	
	    function Main() {
	        _classCallCheck(this, Main);
	
	        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Main, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var actions = _props.actions;
	            var todos = _props.todos;
	            var visibilityFilter = _props.visibilityFilter;
	
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'h3',
	                    null,
	                    'Dashboard'
	                ),
	                _react2['default'].createElement(_components.AddTodo, { onAddTodo: function (text) {
	                        return actions.addTodo(text);
	                    } }),
	                _react2['default'].createElement(_components.Filter, {
	                    visibilityFilter: visibilityFilter,
	                    onFilterChange: function (nextFilter) {
	                        return actions.setVisibilityFilter(nextFilter);
	                    } }),
	                _react2['default'].createElement(_components.TodoList, { todos: selectTodos(todos, visibilityFilter), onTodoClick: function (index) {
	                        return actions.completeTodo(index);
	                    } })
	            );
	        }
	    }]);
	
	    return Main;
	})(_react.Component);
	
	Main.propTypes = {
	    actions: _react.PropTypes.object,
	    todos: _reactImmutableProptypes2['default'].listOf(_reactImmutableProptypes2['default'].contains({
	        text: _react.PropTypes.string.isRequired,
	        completed: _react.PropTypes.bool.isRequired
	    }).isRequired).isRequired,
	    visibilityFilter: _react.PropTypes.object
	};
	
	exports['default'] = (0, _reactRedux.connect)(function (state) {
	    return _extends({}, state);
	}, function (dispatch) {
	    return { actions: (0, _redux.bindActionCreators)(todoActions, dispatch) };
	})(Main);
	module.exports = exports['default'];

/***/ },

/***/ 266:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var Constants = {
	    VISIBILITY_FILTERS: {
	        SHOW_ALL: 'SHOW_ALL',
	        SHOW_COMPLETED: 'SHOW_COMPLETED',
	        SHOW_ACTIVE: 'SHOW_ACTIVE'
	    },
	    ADD_TODO: 'ADD_TODO',
	    COMPLETE_TODO: 'COMPLETE_TODO',
	    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
	};
	
	exports['default'] = Constants;
	module.exports = exports['default'];

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.addTodo = addTodo;
	exports.completeTodo = completeTodo;
	exports.setVisibilityFilter = setVisibilityFilter;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _constants = __webpack_require__(266);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function addTodo(text) {
	    return {
	        type: _constants2['default'].ADD_TODO,
	        text: text
	    };
	}
	
	function completeTodo(index) {
	    return {
	        type: _constants2['default'].COMPLETE_TODO,
	        index: index
	    };
	}
	
	function setVisibilityFilter(filter) {
	    return {
	        type: _constants2['default'].SET_VISIBILITY_FILTER,
	        filter: filter
	    };
	}

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _filter = __webpack_require__(269);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _add_todo = __webpack_require__(270);
	
	var _add_todo2 = _interopRequireDefault(_add_todo);
	
	var _todo_list = __webpack_require__(271);
	
	var _todo_list2 = _interopRequireDefault(_todo_list);
	
	exports['default'] = {
	    Filter: _filter2['default'],
	    AddTodo: _add_todo2['default'],
	    TodoList: _todo_list2['default']
	};
	module.exports = exports['default'];

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _immutable = __webpack_require__(265);
	
	var _reactImmutableProptypes = __webpack_require__(264);
	
	var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);
	
	var _constants = __webpack_require__(266);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var Filter = (function (_Component) {
	    _inherits(Filter, _Component);
	
	    function Filter() {
	        _classCallCheck(this, Filter);
	
	        _get(Object.getPrototypeOf(Filter.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Filter, [{
	        key: 'renderFilter',
	        value: function renderFilter(filter, name) {
	            return !(0, _immutable.is)(this.props.visibilityFilter.get('filter'), filter) ? _react2['default'].createElement(
	                'div',
	                { style: { color: 'red' }, onClick: this.props.onFilterChange.bind(null, filter) },
	                name
	            ) : _react2['default'].createElement(
	                'div',
	                { style: { color: 'green' } },
	                name
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                'Show:',
	                this.renderFilter(_constants2['default'].VISIBILITY_FILTERS.SHOW_ALL, 'All'),
	                this.renderFilter(_constants2['default'].VISIBILITY_FILTERS.SHOW_COMPLETED, 'Completed'),
	                this.renderFilter(_constants2['default'].VISIBILITY_FILTERS.SHOW_ACTIVE, 'Active')
	            );
	        }
	    }]);
	
	    return Filter;
	})(_react.Component);
	
	exports['default'] = Filter;
	
	Filter.propTypes = {
	    onFilterChange: _react.PropTypes.func.isRequired,
	    visibilityFilter: _reactImmutableProptypes2['default'].contains({
	        filter: _react.PropTypes.oneOf([_constants2['default'].VISIBILITY_FILTERS.SHOW_ALL, _constants2['default'].VISIBILITY_FILTERS.SHOW_COMPLETED, _constants2['default'].VISIBILITY_FILTERS.SHOW_ACTIVE]).isRequired
	    }).isRequired
	};
	module.exports = exports['default'];

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var AddTodo = (function (_Component) {
	    _inherits(AddTodo, _Component);
	
	    function AddTodo() {
	        _classCallCheck(this, AddTodo);
	
	        _get(Object.getPrototypeOf(AddTodo.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(AddTodo, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            var node = (0, _react.findDOMNode)(this.refs.input);
	            var text = node.value.trim();
	            if (text !== '') {
	                this.props.onAddTodo(text);
	                node.value = '';
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement('input', { type: 'text', ref: 'input' }),
	                _react2['default'].createElement(
	                    'button',
	                    { onClick: function (event) {
	                            return _this.handleClick(event);
	                        } },
	                    'Add'
	                )
	            );
	        }
	    }]);
	
	    return AddTodo;
	})(_react.Component);
	
	exports['default'] = AddTodo;
	
	AddTodo.propTypes = {
	    onAddTodo: _react.PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactImmutableProptypes = __webpack_require__(264);
	
	var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);
	
	var _Todo = __webpack_require__(272);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	var TodoList = (function (_Component) {
	    _inherits(TodoList, _Component);
	
	    function TodoList() {
	        _classCallCheck(this, TodoList);
	
	        _get(Object.getPrototypeOf(TodoList.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(TodoList, [{
	        key: 'render',
	        value: function render() {
	            var _this = this;
	
	            return _react2['default'].createElement(
	                'ul',
	                null,
	                this.props.todos.map(function (todo, index) {
	                    return _react2['default'].createElement(_Todo2['default'], {
	                        todo: todo,
	                        key: index,
	                        onClick: function () {
	                            return _this.props.onTodoClick(index);
	                        } });
	                })
	            );
	        }
	    }]);
	
	    return TodoList;
	})(_react.Component);
	
	exports['default'] = TodoList;
	
	TodoList.propTypes = {
	    onTodoClick: _react.PropTypes.func.isRequired,
	    todos: _reactImmutableProptypes2['default'].listOf(_reactImmutableProptypes2['default'].contains({
	        text: _react.PropTypes.string.isRequired,
	        completed: _react.PropTypes.bool.isRequired
	    }).isRequired).isRequired
	};
	module.exports = exports['default'];

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactImmutableProptypes = __webpack_require__(264);
	
	var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);
	
	var Todo = (function (_Component) {
	    _inherits(Todo, _Component);
	
	    function Todo() {
	        _classCallCheck(this, Todo);
	
	        _get(Object.getPrototypeOf(Todo.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Todo, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var onClick = _props.onClick;
	            var todo = _props.todo;
	
	            var text = todo.get('text');
	            var completed = todo.get('completed');
	
	            return _react2['default'].createElement(
	                'div',
	                { style: { color: completed ? 'green' : 'red' }, onClick: onClick },
	                completed ? '☑ >> ' : '☒ >> ',
	                text
	            );
	        }
	    }]);
	
	    return Todo;
	})(_react.Component);
	
	exports['default'] = Todo;
	
	Todo.propTypes = {
	    onClick: _react.PropTypes.func.isRequired,
	    todo: _reactImmutableProptypes2['default'].contains({
	        text: _react.PropTypes.string.isRequired,
	        completed: _react.PropTypes.bool.isRequired
	    }).isRequired
	};
	module.exports = exports['default'];

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Settings = (function (_Component) {
	    _inherits(Settings, _Component);
	
	    function Settings() {
	        _classCallCheck(this, Settings);
	
	        _get(Object.getPrototypeOf(Settings.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Settings, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'h3',
	                    null,
	                    'Account Settings'
	                )
	            );
	        }
	    }]);
	
	    return Settings;
	})(_react.Component);
	
	exports['default'] = Settings;
	module.exports = exports['default'];

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _visibility_filter = __webpack_require__(275);
	
	var _visibility_filter2 = _interopRequireDefault(_visibility_filter);
	
	var _todos = __webpack_require__(276);
	
	var _todos2 = _interopRequireDefault(_todos);
	
	var Reducers = {
	    visibilityFilter: _visibility_filter2['default'],
	    todos: _todos2['default']
	};
	
	exports['default'] = Reducers;
	module.exports = exports['default'];

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = visibilityFilter;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _immutable = __webpack_require__(265);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _constants = __webpack_require__(266);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var initialState = _immutable2['default'].fromJS({
	    filter: _constants2['default'].VISIBILITY_FILTERS.SHOW_ALL
	});
	
	function visibilityFilter(state, action) {
	    if (state === undefined) state = initialState;
	
	    switch (action.type) {
	        case _constants2['default'].SET_VISIBILITY_FILTER:
	            return state.set('filter', action.filter);
	        default:
	            return state;
	    }
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = todos;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _immutable = __webpack_require__(265);
	
	var _constants = __webpack_require__(266);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function todos(state, action) {
	    if (state === undefined) state = new _immutable.List();
	
	    switch (action.type) {
	        case _constants2['default'].ADD_TODO:
	            return state.push((0, _immutable.fromJS)({
	                text: action.text,
	                completed: false
	            }));
	        case _constants2['default'].COMPLETE_TODO:
	            return state.setIn([action.index, 'completed'], !state.getIn([action.index, 'completed']));
	        default:
	            return state;
	    }
	}
	
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=bundle.js.map