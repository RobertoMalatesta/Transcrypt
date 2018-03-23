import {__envir__, __nest__, __init__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, complex, __conj__, __Terminal__, __terminal__, print} from './org.transcrypt.__runtime__.mod.js';
var __name__ = 'globals_function.sub';
export var xxa = 'subXxa';
export var xxb = 'subXxb';
for (var py_name of tuple (['xxp', 'xxq'])) {
	__globals__ (__all__) [py_name] = 'sub{}'.format (py_name.capitalize ());
}
export var f = function () {
	for (var py_name of tuple (['xxr', 'xxs'])) {
		__globals__ (__all__) [py_name] = 'sub{}'.format (py_name.capitalize ());
	}
};
export var run = function (autoTester) {
	f ();
	autoTester.check ('Check sub 1', xxa, xxb);
	autoTester.check ('Check sub 2', ...(function () {
		var __accu0__ = [];
		for (var py_name of tuple (['xxa', 'xxb', 'xxp', 'xxq', 'xxr', 'xxs'])) {
			__accu0__.append (__globals__ (__all__) [py_name]);
		}
		return __accu0__;
	}) ());
	autoTester.check ('Check sub 3', ...sorted ((function () {
		var __accu0__ = [];
		for (var [key, value] of __globals__ (__all__).py_items ()) {
			if (key.startswith ('xx')) {
				__accu0__.append (value);
			}
		}
		return __accu0__;
	}) ()));
};