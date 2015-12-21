// Generated from MiniJava.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MiniJavaListener = require('./MiniJavaListener').MiniJavaListener;
var MiniJavaVisitor = require('./MiniJavaVisitor').MiniJavaVisitor;

var grammarFileName = "MiniJava.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00036\u0110\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0003",
    "\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00039\n\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003=\n\u0003\f\u0003\u000e\u0003@\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004G",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006Z\n\u0006\f\u0006\u000e\u0006]\u000b\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007f\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007k\n\u0007",
    "\f\u0007\u000e\u0007n\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0007\bu\n\b\f\b\u000e\bx\u000b\b\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0086\n\u000b\u0003\f\u0003",
    "\f\u0007\f\u008a\n\f\f\f\u000e\f\u008d\u000b\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u0098\n\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00b1\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u00b7\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u00bd\n\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u00c9\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u00eb\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007",
    "\u0015\u00f1\n\u0015\f\u0015\u000e\u0015\u00f4\u000b\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u0102\n\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0106\n\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u010b\n\u0017\f\u0017\u000e",
    "\u0017\u010e\u000b\u0017\u0003\u0017\u0002\u0003(\u0018\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,\u0002\b\u0005\u0002\n\n\u0012\u001333\u0003\u0002\u001e\u001f",
    "\u0003\u0002 \"\u0004\u0002\u001e\u001e##\u0003\u0002$\'\u0003\u0002",
    "()\u0124\u00021\u0003\u0002\u0002\u0002\u00044\u0003\u0002\u0002\u0002",
    "\u0006F\u0003\u0002\u0002\u0002\bH\u0003\u0002\u0002\u0002\nM\u0003",
    "\u0002\u0002\u0002\f`\u0003\u0002\u0002\u0002\u000eq\u0003\u0002\u0002",
    "\u0002\u0010y\u0003\u0002\u0002\u0002\u0012|\u0003\u0002\u0002\u0002",
    "\u0014\u0085\u0003\u0002\u0002\u0002\u0016\u0087\u0003\u0002\u0002\u0002",
    "\u0018\u0090\u0003\u0002\u0002\u0002\u001a\u0099\u0003\u0002\u0002\u0002",
    "\u001c\u009f\u0003\u0002\u0002\u0002\u001e\u00a1\u0003\u0002\u0002\u0002",
    " \u00ab\u0003\u0002\u0002\u0002\"\u00ae\u0003\u0002\u0002\u0002$\u00b6",
    "\u0003\u0002\u0002\u0002&\u00b8\u0003\u0002\u0002\u0002(\u00c8\u0003",
    "\u0002\u0002\u0002*\u0105\u0003\u0002\u0002\u0002,\u0107\u0003\u0002",
    "\u0002\u0002.0\u0005\u0004\u0003\u0002/.\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "2\u0003\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000245\u0007\u0003",
    "\u0002\u000258\u00073\u0002\u000267\u0007\u0004\u0002\u000279\u0007",
    "3\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029:",
    "\u0003\u0002\u0002\u0002:>\u0007\u0005\u0002\u0002;=\u0005\u0006\u0004",
    "\u0002<;\u0003\u0002\u0002\u0002=@\u0003\u0002\u0002\u0002><\u0003\u0002",
    "\u0002\u0002>?\u0003\u0002\u0002\u0002?A\u0003\u0002\u0002\u0002@>\u0003",
    "\u0002\u0002\u0002AB\u0007\u0006\u0002\u0002B\u0005\u0003\u0002\u0002",
    "\u0002CG\u0005\b\u0005\u0002DG\u0005\n\u0006\u0002EG\u0005\f\u0007\u0002",
    "FC\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002FE\u0003\u0002\u0002",
    "\u0002G\u0007\u0003\u0002\u0002\u0002HI\u0007\u0007\u0002\u0002IJ\u0005",
    "\u0012\n\u0002JK\u00073\u0002\u0002KL\u0007\b\u0002\u0002L\t\u0003\u0002",
    "\u0002\u0002MN\u0007\u0007\u0002\u0002NO\u0007\t\u0002\u0002OP\u0007",
    "\n\u0002\u0002PQ\u0007\u000b\u0002\u0002QR\u0007\f\u0002\u0002RS\u0007",
    "\r\u0002\u0002ST\u0007\u000e\u0002\u0002TU\u0007\u000f\u0002\u0002U",
    "V\u00073\u0002\u0002VW\u0007\u0010\u0002\u0002W[\u0007\u0005\u0002\u0002",
    "XZ\u0005$\u0013\u0002YX\u0003\u0002\u0002\u0002Z]\u0003\u0002\u0002",
    "\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\^\u0003",
    "\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^_\u0007\u0006\u0002\u0002",
    "_\u000b\u0003\u0002\u0002\u0002`a\u0007\u0007\u0002\u0002ab\u0005\u0012",
    "\n\u0002bc\u00073\u0002\u0002ce\u0007\f\u0002\u0002df\u0005\u000e\b",
    "\u0002ed\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0003\u0002",
    "\u0002\u0002gh\u0007\u0010\u0002\u0002hl\u0007\u0005\u0002\u0002ik\u0005",
    "$\u0013\u0002ji\u0003\u0002\u0002\u0002kn\u0003\u0002\u0002\u0002lj",
    "\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mo\u0003\u0002\u0002",
    "\u0002nl\u0003\u0002\u0002\u0002op\u0007\u0006\u0002\u0002p\r\u0003",
    "\u0002\u0002\u0002qv\u0005\u0010\t\u0002rs\u0007\u0011\u0002\u0002s",
    "u\u0005\u0010\t\u0002tr\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002",
    "\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w\u000f\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\u0005\u0012\n\u0002z",
    "{\u00073\u0002\u0002{\u0011\u0003\u0002\u0002\u0002|}\t\u0002\u0002",
    "\u0002}\u0013\u0003\u0002\u0002\u0002~\u0086\u0005\u0016\f\u0002\u007f",
    "\u0086\u0005\u001e\u0010\u0002\u0080\u0086\u0005\u0018\r\u0002\u0081",
    "\u0086\u0005\u001a\u000e\u0002\u0082\u0086\u0005\u001c\u000f\u0002\u0083",
    "\u0086\u0005 \u0011\u0002\u0084\u0086\u0005\"\u0012\u0002\u0085~\u0003",
    "\u0002\u0002\u0002\u0085\u007f\u0003\u0002\u0002\u0002\u0085\u0080\u0003",
    "\u0002\u0002\u0002\u0085\u0081\u0003\u0002\u0002\u0002\u0085\u0082\u0003",
    "\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0084\u0003",
    "\u0002\u0002\u0002\u0086\u0015\u0003\u0002\u0002\u0002\u0087\u008b\u0007",
    "\u0005\u0002\u0002\u0088\u008a\u0005$\u0013\u0002\u0089\u0088\u0003",
    "\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b\u0089\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008e\u0003",
    "\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u008f\u0007",
    "\u0006\u0002\u0002\u008f\u0017\u0003\u0002\u0002\u0002\u0090\u0091\u0007",
    "\u0014\u0002\u0002\u0091\u0092\u0007\f\u0002\u0002\u0092\u0093\u0005",
    "(\u0015\u0002\u0093\u0094\u0007\u0010\u0002\u0002\u0094\u0097\u0005",
    "\u0014\u000b\u0002\u0095\u0096\u0007\u0015\u0002\u0002\u0096\u0098\u0005",
    "\u0014\u000b\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003",
    "\u0002\u0002\u0002\u0098\u0019\u0003\u0002\u0002\u0002\u0099\u009a\u0007",
    "\u0016\u0002\u0002\u009a\u009b\u0007\f\u0002\u0002\u009b\u009c\u0005",
    "(\u0015\u0002\u009c\u009d\u0007\u0010\u0002\u0002\u009d\u009e\u0005",
    "\u0014\u000b\u0002\u009e\u001b\u0003\u0002\u0002\u0002\u009f\u00a0\u0007",
    "\b\u0002\u0002\u00a0\u001d\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007",
    "\u0017\u0002\u0002\u00a2\u00a3\u0007\u0018\u0002\u0002\u00a3\u00a4\u0007",
    "\u0019\u0002\u0002\u00a4\u00a5\u0007\u0018\u0002\u0002\u00a5\u00a6\u0007",
    "\u001a\u0002\u0002\u00a6\u00a7\u0007\f\u0002\u0002\u00a7\u00a8\u0005",
    "(\u0015\u0002\u00a8\u00a9\u0007\u0010\u0002\u0002\u00a9\u00aa\u0007",
    "\b\u0002\u0002\u00aa\u001f\u0003\u0002\u0002\u0002\u00ab\u00ac\u0005",
    "(\u0015\u0002\u00ac\u00ad\u0007\b\u0002\u0002\u00ad!\u0003\u0002\u0002",
    "\u0002\u00ae\u00b0\u0007\u001b\u0002\u0002\u00af\u00b1\u0005(\u0015",
    "\u0002\u00b0\u00af\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\b\u0002",
    "\u0002\u00b3#\u0003\u0002\u0002\u0002\u00b4\u00b7\u0005\u0014\u000b",
    "\u0002\u00b5\u00b7\u0005&\u0014\u0002\u00b6\u00b4\u0003\u0002\u0002",
    "\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7%\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\u0005\u0012\n\u0002\u00b9\u00bc\u00073\u0002\u0002",
    "\u00ba\u00bb\u0007\u001c\u0002\u0002\u00bb\u00bd\u0005(\u0015\u0002",
    "\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002",
    "\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00bf\u0007\b\u0002\u0002",
    "\u00bf\'\u0003\u0002\u0002\u0002\u00c0\u00c1\b\u0015\u0001\u0002\u00c1",
    "\u00c2\t\u0003\u0002\u0002\u00c2\u00c9\u0005(\u0015\f\u00c3\u00c9\u0005",
    "*\u0016\u0002\u00c4\u00c5\u0007\u001d\u0002\u0002\u00c5\u00c6\u0007",
    "3\u0002\u0002\u00c6\u00c7\u0007\f\u0002\u0002\u00c7\u00c9\u0007\u0010",
    "\u0002\u0002\u00c8\u00c0\u0003\u0002\u0002\u0002\u00c8\u00c3\u0003\u0002",
    "\u0002\u0002\u00c8\u00c4\u0003\u0002\u0002\u0002\u00c9\u00f2\u0003\u0002",
    "\u0002\u0002\u00ca\u00cb\f\u000b\u0002\u0002\u00cb\u00cc\t\u0004\u0002",
    "\u0002\u00cc\u00f1\u0005(\u0015\f\u00cd\u00ce\f\n\u0002\u0002\u00ce",
    "\u00cf\t\u0005\u0002\u0002\u00cf\u00f1\u0005(\u0015\u000b\u00d0\u00d1",
    "\f\t\u0002\u0002\u00d1\u00d2\t\u0006\u0002\u0002\u00d2\u00f1\u0005(",
    "\u0015\n\u00d3\u00d4\f\b\u0002\u0002\u00d4\u00d5\t\u0007\u0002\u0002",
    "\u00d5\u00f1\u0005(\u0015\t\u00d6\u00d7\f\u0007\u0002\u0002\u00d7\u00d8",
    "\u0007*\u0002\u0002\u00d8\u00f1\u0005(\u0015\b\u00d9\u00da\f\u0006\u0002",
    "\u0002\u00da\u00db\u0007+\u0002\u0002\u00db\u00f1\u0005(\u0015\u0007",
    "\u00dc\u00dd\f\u0005\u0002\u0002\u00dd\u00de\u0007,\u0002\u0002\u00de",
    "\u00f1\u0005(\u0015\u0006\u00df\u00e0\f\u0004\u0002\u0002\u00e0\u00e1",
    "\u0007-\u0002\u0002\u00e1\u00f1\u0005(\u0015\u0005\u00e2\u00e3\f\u0003",
    "\u0002\u0002\u00e3\u00e4\u0007\u001c\u0002\u0002\u00e4\u00f1\u0005(",
    "\u0015\u0004\u00e5\u00e6\f\u000f\u0002\u0002\u00e6\u00e7\u0007\u0018",
    "\u0002\u0002\u00e7\u00e8\u00073\u0002\u0002\u00e8\u00ea\u0007\f\u0002",
    "\u0002\u00e9\u00eb\u0005,\u0017\u0002\u00ea\u00e9\u0003\u0002\u0002",
    "\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002",
    "\u0002\u00ec\u00f1\u0007\u0010\u0002\u0002\u00ed\u00ee\f\u000e\u0002",
    "\u0002\u00ee\u00ef\u0007\u0018\u0002\u0002\u00ef\u00f1\u00073\u0002",
    "\u0002\u00f0\u00ca\u0003\u0002\u0002\u0002\u00f0\u00cd\u0003\u0002\u0002",
    "\u0002\u00f0\u00d0\u0003\u0002\u0002\u0002\u00f0\u00d3\u0003\u0002\u0002",
    "\u0002\u00f0\u00d6\u0003\u0002\u0002\u0002\u00f0\u00d9\u0003\u0002\u0002",
    "\u0002\u00f0\u00dc\u0003\u0002\u0002\u0002\u00f0\u00df\u0003\u0002\u0002",
    "\u0002\u00f0\u00e2\u0003\u0002\u0002\u0002\u00f0\u00e5\u0003\u0002\u0002",
    "\u0002\u00f0\u00ed\u0003\u0002\u0002\u0002\u00f1\u00f4\u0003\u0002\u0002",
    "\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002",
    "\u0002\u00f3)\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\u0007\f\u0002\u0002\u00f6\u00f7\u0005(\u0015\u0002",
    "\u00f7\u00f8\u0007\u0010\u0002\u0002\u00f8\u0106\u0003\u0002\u0002\u0002",
    "\u00f9\u0106\u0007.\u0002\u0002\u00fa\u0106\u0007/\u0002\u0002\u00fb",
    "\u0106\u00070\u0002\u0002\u00fc\u0106\u00071\u0002\u0002\u00fd\u0106",
    "\u00072\u0002\u0002\u00fe\u00ff\u00073\u0002\u0002\u00ff\u0101\u0007",
    "\f\u0002\u0002\u0100\u0102\u0005,\u0017\u0002\u0101\u0100\u0003\u0002",
    "\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002",
    "\u0002\u0002\u0103\u0106\u0007\u0010\u0002\u0002\u0104\u0106\u00073",
    "\u0002\u0002\u0105\u00f5\u0003\u0002\u0002\u0002\u0105\u00f9\u0003\u0002",
    "\u0002\u0002\u0105\u00fa\u0003\u0002\u0002\u0002\u0105\u00fb\u0003\u0002",
    "\u0002\u0002\u0105\u00fc\u0003\u0002\u0002\u0002\u0105\u00fd\u0003\u0002",
    "\u0002\u0002\u0105\u00fe\u0003\u0002\u0002\u0002\u0105\u0104\u0003\u0002",
    "\u0002\u0002\u0106+\u0003\u0002\u0002\u0002\u0107\u010c\u0005(\u0015",
    "\u0002\u0108\u0109\u0007\u0011\u0002\u0002\u0109\u010b\u0005(\u0015",
    "\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010b\u010e\u0003\u0002\u0002",
    "\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002",
    "\u0002\u010d-\u0003\u0002\u0002\u0002\u010e\u010c\u0003\u0002\u0002",
    "\u0002\u001718>F[elv\u0085\u008b\u0097\u00b0\u00b6\u00bc\u00c8\u00ea",
    "\u00f0\u00f2\u0101\u0105\u010c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'class'", "'extends'", "'{'", "'}'", "'public'", 
                     "';'", "'static'", "'void'", "'main'", "'('", "'String'", 
                     "'['", "']'", "')'", "','", "'boolean'", "'int'", "'if'", 
                     "'else'", "'while'", "'System'", "'.'", "'out'", "'println'", 
                     "'return'", "'='", "'new'", "'-'", "'!'", "'*'", "'/'", 
                     "'%'", "'+'", "'<='", "'>='", "'>'", "'<'", "'=='", 
                     "'!='", "'&'", "'|'", "'&&'", "'||'", "'this'", "'null'", 
                     "'false'", "'true'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', "INTEGER", 
                      "IDENTIFIER", "LINE_COMMENT", "COMMENT", "WS" ];

var ruleNames =  [ "translationUnit", "classDeclaration", "classMember", 
                   "field", "mainMethod", "method", "parameters", "parameter", 
                   "type", "statement", "block", "ifStatement", "whileStatement", 
                   "emptyStatement", "printStatement", "expressionStatement", 
                   "returnStatement", "blockStatement", "localVariableDeclarationStatement", 
                   "expression", "primaryExpression", "expressionList" ];

function MiniJavaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MiniJavaParser.prototype = Object.create(antlr4.Parser.prototype);
MiniJavaParser.prototype.constructor = MiniJavaParser;

Object.defineProperty(MiniJavaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MiniJavaParser.EOF = antlr4.Token.EOF;
MiniJavaParser.T__0 = 1;
MiniJavaParser.T__1 = 2;
MiniJavaParser.T__2 = 3;
MiniJavaParser.T__3 = 4;
MiniJavaParser.T__4 = 5;
MiniJavaParser.T__5 = 6;
MiniJavaParser.T__6 = 7;
MiniJavaParser.T__7 = 8;
MiniJavaParser.T__8 = 9;
MiniJavaParser.T__9 = 10;
MiniJavaParser.T__10 = 11;
MiniJavaParser.T__11 = 12;
MiniJavaParser.T__12 = 13;
MiniJavaParser.T__13 = 14;
MiniJavaParser.T__14 = 15;
MiniJavaParser.T__15 = 16;
MiniJavaParser.T__16 = 17;
MiniJavaParser.T__17 = 18;
MiniJavaParser.T__18 = 19;
MiniJavaParser.T__19 = 20;
MiniJavaParser.T__20 = 21;
MiniJavaParser.T__21 = 22;
MiniJavaParser.T__22 = 23;
MiniJavaParser.T__23 = 24;
MiniJavaParser.T__24 = 25;
MiniJavaParser.T__25 = 26;
MiniJavaParser.T__26 = 27;
MiniJavaParser.T__27 = 28;
MiniJavaParser.T__28 = 29;
MiniJavaParser.T__29 = 30;
MiniJavaParser.T__30 = 31;
MiniJavaParser.T__31 = 32;
MiniJavaParser.T__32 = 33;
MiniJavaParser.T__33 = 34;
MiniJavaParser.T__34 = 35;
MiniJavaParser.T__35 = 36;
MiniJavaParser.T__36 = 37;
MiniJavaParser.T__37 = 38;
MiniJavaParser.T__38 = 39;
MiniJavaParser.T__39 = 40;
MiniJavaParser.T__40 = 41;
MiniJavaParser.T__41 = 42;
MiniJavaParser.T__42 = 43;
MiniJavaParser.T__43 = 44;
MiniJavaParser.T__44 = 45;
MiniJavaParser.T__45 = 46;
MiniJavaParser.T__46 = 47;
MiniJavaParser.INTEGER = 48;
MiniJavaParser.IDENTIFIER = 49;
MiniJavaParser.LINE_COMMENT = 50;
MiniJavaParser.COMMENT = 51;
MiniJavaParser.WS = 52;

MiniJavaParser.RULE_translationUnit = 0;
MiniJavaParser.RULE_classDeclaration = 1;
MiniJavaParser.RULE_classMember = 2;
MiniJavaParser.RULE_field = 3;
MiniJavaParser.RULE_mainMethod = 4;
MiniJavaParser.RULE_method = 5;
MiniJavaParser.RULE_parameters = 6;
MiniJavaParser.RULE_parameter = 7;
MiniJavaParser.RULE_type = 8;
MiniJavaParser.RULE_statement = 9;
MiniJavaParser.RULE_block = 10;
MiniJavaParser.RULE_ifStatement = 11;
MiniJavaParser.RULE_whileStatement = 12;
MiniJavaParser.RULE_emptyStatement = 13;
MiniJavaParser.RULE_printStatement = 14;
MiniJavaParser.RULE_expressionStatement = 15;
MiniJavaParser.RULE_returnStatement = 16;
MiniJavaParser.RULE_blockStatement = 17;
MiniJavaParser.RULE_localVariableDeclarationStatement = 18;
MiniJavaParser.RULE_expression = 19;
MiniJavaParser.RULE_primaryExpression = 20;
MiniJavaParser.RULE_expressionList = 21;

function TranslationUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_translationUnit;
    return this;
}

TranslationUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TranslationUnitContext.prototype.constructor = TranslationUnitContext;

TranslationUnitContext.prototype.classDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassDeclarationContext);
    } else {
        return this.getTypedRuleContext(ClassDeclarationContext,i);
    }
};

TranslationUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterTranslationUnit(this);
	}
};

TranslationUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitTranslationUnit(this);
	}
};

TranslationUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitTranslationUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.TranslationUnitContext = TranslationUnitContext;

MiniJavaParser.prototype.translationUnit = function() {

    var localctx = new TranslationUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MiniJavaParser.RULE_translationUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniJavaParser.T__0) {
            this.state = 44;
            this.classDeclaration();
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClassDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_classDeclaration;
    return this;
}

ClassDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclarationContext.prototype.constructor = ClassDeclarationContext;

ClassDeclarationContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MiniJavaParser.IDENTIFIER);
    } else {
        return this.getToken(MiniJavaParser.IDENTIFIER, i);
    }
};


ClassDeclarationContext.prototype.classMember = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassMemberContext);
    } else {
        return this.getTypedRuleContext(ClassMemberContext,i);
    }
};

ClassDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterClassDeclaration(this);
	}
};

ClassDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitClassDeclaration(this);
	}
};

ClassDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitClassDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.ClassDeclarationContext = ClassDeclarationContext;

MiniJavaParser.prototype.classDeclaration = function() {

    var localctx = new ClassDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MiniJavaParser.RULE_classDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(MiniJavaParser.T__0);
        this.state = 51;
        this.match(MiniJavaParser.IDENTIFIER);
        this.state = 54;
        _la = this._input.LA(1);
        if(_la===MiniJavaParser.T__1) {
            this.state = 52;
            this.match(MiniJavaParser.T__1);
            this.state = 53;
            this.match(MiniJavaParser.IDENTIFIER);
        }

        this.state = 56;
        this.match(MiniJavaParser.T__2);
        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniJavaParser.T__4) {
            this.state = 57;
            this.classMember();
            this.state = 62;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 63;
        this.match(MiniJavaParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClassMemberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_classMember;
    return this;
}

ClassMemberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassMemberContext.prototype.constructor = ClassMemberContext;

ClassMemberContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

ClassMemberContext.prototype.mainMethod = function() {
    return this.getTypedRuleContext(MainMethodContext,0);
};

ClassMemberContext.prototype.method = function() {
    return this.getTypedRuleContext(MethodContext,0);
};

ClassMemberContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterClassMember(this);
	}
};

ClassMemberContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitClassMember(this);
	}
};

ClassMemberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitClassMember(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.ClassMemberContext = ClassMemberContext;

MiniJavaParser.prototype.classMember = function() {

    var localctx = new ClassMemberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MiniJavaParser.RULE_classMember);
    try {
        this.state = 68;
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.field();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.mainMethod();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.method();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FieldContext.prototype.IDENTIFIER = function() {
    return this.getToken(MiniJavaParser.IDENTIFIER, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.FieldContext = FieldContext;

MiniJavaParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MiniJavaParser.RULE_field);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(MiniJavaParser.T__4);
        this.state = 71;
        this.type();
        this.state = 72;
        this.match(MiniJavaParser.IDENTIFIER);
        this.state = 73;
        this.match(MiniJavaParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MainMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_mainMethod;
    return this;
}

MainMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainMethodContext.prototype.constructor = MainMethodContext;

MainMethodContext.prototype.IDENTIFIER = function() {
    return this.getToken(MiniJavaParser.IDENTIFIER, 0);
};

MainMethodContext.prototype.blockStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStatementContext);
    } else {
        return this.getTypedRuleContext(BlockStatementContext,i);
    }
};

MainMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterMainMethod(this);
	}
};

MainMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitMainMethod(this);
	}
};

MainMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitMainMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.MainMethodContext = MainMethodContext;

MiniJavaParser.prototype.mainMethod = function() {

    var localctx = new MainMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MiniJavaParser.RULE_mainMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(MiniJavaParser.T__4);
        this.state = 76;
        this.match(MiniJavaParser.T__6);
        this.state = 77;
        this.match(MiniJavaParser.T__7);
        this.state = 78;
        this.match(MiniJavaParser.T__8);
        this.state = 79;
        this.match(MiniJavaParser.T__9);
        this.state = 80;
        this.match(MiniJavaParser.T__10);
        this.state = 81;
        this.match(MiniJavaParser.T__11);
        this.state = 82;
        this.match(MiniJavaParser.T__12);
        this.state = 83;
        this.match(MiniJavaParser.IDENTIFIER);
        this.state = 84;
        this.match(MiniJavaParser.T__13);
        this.state = 85;
        this.match(MiniJavaParser.T__2);
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniJavaParser.T__2) | (1 << MiniJavaParser.T__5) | (1 << MiniJavaParser.T__7) | (1 << MiniJavaParser.T__9) | (1 << MiniJavaParser.T__15) | (1 << MiniJavaParser.T__16) | (1 << MiniJavaParser.T__17) | (1 << MiniJavaParser.T__19) | (1 << MiniJavaParser.T__20) | (1 << MiniJavaParser.T__24) | (1 << MiniJavaParser.T__26) | (1 << MiniJavaParser.T__27) | (1 << MiniJavaParser.T__28))) !== 0) || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (MiniJavaParser.T__43 - 44)) | (1 << (MiniJavaParser.T__44 - 44)) | (1 << (MiniJavaParser.T__45 - 44)) | (1 << (MiniJavaParser.T__46 - 44)) | (1 << (MiniJavaParser.INTEGER - 44)) | (1 << (MiniJavaParser.IDENTIFIER - 44)))) !== 0)) {
            this.state = 86;
            this.blockStatement();
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 92;
        this.match(MiniJavaParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_method;
    return this;
}

MethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodContext.prototype.constructor = MethodContext;

MethodContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

MethodContext.prototype.IDENTIFIER = function() {
    return this.getToken(MiniJavaParser.IDENTIFIER, 0);
};

MethodContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

MethodContext.prototype.blockStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStatementContext);
    } else {
        return this.getTypedRuleContext(BlockStatementContext,i);
    }
};

MethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterMethod(this);
	}
};

MethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitMethod(this);
	}
};

MethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.MethodContext = MethodContext;

MiniJavaParser.prototype.method = function() {

    var localctx = new MethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MiniJavaParser.RULE_method);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(MiniJavaParser.T__4);
        this.state = 95;
        this.type();
        this.state = 96;
        this.match(MiniJavaParser.IDENTIFIER);
        this.state = 97;
        this.match(MiniJavaParser.T__9);
        this.state = 99;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniJavaParser.T__7) | (1 << MiniJavaParser.T__15) | (1 << MiniJavaParser.T__16))) !== 0) || _la===MiniJavaParser.IDENTIFIER) {
            this.state = 98;
            this.parameters();
        }

        this.state = 101;
        this.match(MiniJavaParser.T__13);
        this.state = 102;
        this.match(MiniJavaParser.T__2);
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniJavaParser.T__2) | (1 << MiniJavaParser.T__5) | (1 << MiniJavaParser.T__7) | (1 << MiniJavaParser.T__9) | (1 << MiniJavaParser.T__15) | (1 << MiniJavaParser.T__16) | (1 << MiniJavaParser.T__17) | (1 << MiniJavaParser.T__19) | (1 << MiniJavaParser.T__20) | (1 << MiniJavaParser.T__24) | (1 << MiniJavaParser.T__26) | (1 << MiniJavaParser.T__27) | (1 << MiniJavaParser.T__28))) !== 0) || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (MiniJavaParser.T__43 - 44)) | (1 << (MiniJavaParser.T__44 - 44)) | (1 << (MiniJavaParser.T__45 - 44)) | (1 << (MiniJavaParser.T__46 - 44)) | (1 << (MiniJavaParser.INTEGER - 44)) | (1 << (MiniJavaParser.IDENTIFIER - 44)))) !== 0)) {
            this.state = 103;
            this.blockStatement();
            this.state = 108;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 109;
        this.match(MiniJavaParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.ParametersContext = ParametersContext;

MiniJavaParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MiniJavaParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.parameter();
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniJavaParser.T__14) {
            this.state = 112;
            this.match(MiniJavaParser.T__14);
            this.state = 113;
            this.parameter();
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ParameterContext.prototype.IDENTIFIER = function() {
    return this.getToken(MiniJavaParser.IDENTIFIER, 0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitParameter(this);
	}
};

ParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.ParameterContext = ParameterContext;

MiniJavaParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MiniJavaParser.RULE_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.type();
        this.state = 120;
        this.match(MiniJavaParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.IDENTIFIER = function() {
    return this.getToken(MiniJavaParser.IDENTIFIER, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.TypeContext = TypeContext;

MiniJavaParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MiniJavaParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniJavaParser.T__7) | (1 << MiniJavaParser.T__15) | (1 << MiniJavaParser.T__16))) !== 0) || _la===MiniJavaParser.IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.printStatement = function() {
    return this.getTypedRuleContext(PrintStatementContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};

StatementContext.prototype.emptyStatement = function() {
    return this.getTypedRuleContext(EmptyStatementContext,0);
};

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.StatementContext = StatementContext;

MiniJavaParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MiniJavaParser.RULE_statement);
    try {
        this.state = 131;
        switch(this._input.LA(1)) {
        case MiniJavaParser.T__2:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.block();
            break;
        case MiniJavaParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.printStatement();
            break;
        case MiniJavaParser.T__17:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
            this.ifStatement();
            break;
        case MiniJavaParser.T__19:
            this.enterOuterAlt(localctx, 4);
            this.state = 127;
            this.whileStatement();
            break;
        case MiniJavaParser.T__5:
            this.enterOuterAlt(localctx, 5);
            this.state = 128;
            this.emptyStatement();
            break;
        case MiniJavaParser.T__9:
        case MiniJavaParser.T__26:
        case MiniJavaParser.T__27:
        case MiniJavaParser.T__28:
        case MiniJavaParser.T__43:
        case MiniJavaParser.T__44:
        case MiniJavaParser.T__45:
        case MiniJavaParser.T__46:
        case MiniJavaParser.INTEGER:
        case MiniJavaParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 6);
            this.state = 129;
            this.expressionStatement();
            break;
        case MiniJavaParser.T__24:
            this.enterOuterAlt(localctx, 7);
            this.state = 130;
            this.returnStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.blockStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStatementContext);
    } else {
        return this.getTypedRuleContext(BlockStatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.BlockContext = BlockContext;

MiniJavaParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MiniJavaParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(MiniJavaParser.T__2);
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniJavaParser.T__2) | (1 << MiniJavaParser.T__5) | (1 << MiniJavaParser.T__7) | (1 << MiniJavaParser.T__9) | (1 << MiniJavaParser.T__15) | (1 << MiniJavaParser.T__16) | (1 << MiniJavaParser.T__17) | (1 << MiniJavaParser.T__19) | (1 << MiniJavaParser.T__20) | (1 << MiniJavaParser.T__24) | (1 << MiniJavaParser.T__26) | (1 << MiniJavaParser.T__27) | (1 << MiniJavaParser.T__28))) !== 0) || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (MiniJavaParser.T__43 - 44)) | (1 << (MiniJavaParser.T__44 - 44)) | (1 << (MiniJavaParser.T__45 - 44)) | (1 << (MiniJavaParser.T__46 - 44)) | (1 << (MiniJavaParser.INTEGER - 44)) | (1 << (MiniJavaParser.IDENTIFIER - 44)))) !== 0)) {
            this.state = 134;
            this.blockStatement();
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 140;
        this.match(MiniJavaParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitIfStatement(this);
	}
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.IfStatementContext = IfStatementContext;

MiniJavaParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MiniJavaParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(MiniJavaParser.T__17);
        this.state = 143;
        this.match(MiniJavaParser.T__9);
        this.state = 144;
        this.expression(0);
        this.state = 145;
        this.match(MiniJavaParser.T__13);
        this.state = 146;
        this.statement();
        this.state = 149;
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 147;
            this.match(MiniJavaParser.T__18);
            this.state = 148;
            this.statement();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitWhileStatement(this);
	}
};

WhileStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitWhileStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.WhileStatementContext = WhileStatementContext;

MiniJavaParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MiniJavaParser.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(MiniJavaParser.T__19);
        this.state = 152;
        this.match(MiniJavaParser.T__9);
        this.state = 153;
        this.expression(0);
        this.state = 154;
        this.match(MiniJavaParser.T__13);
        this.state = 155;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmptyStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_emptyStatement;
    return this;
}

EmptyStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyStatementContext.prototype.constructor = EmptyStatementContext;


EmptyStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitEmptyStatement(this);
	}
};

EmptyStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitEmptyStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.EmptyStatementContext = EmptyStatementContext;

MiniJavaParser.prototype.emptyStatement = function() {

    var localctx = new EmptyStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MiniJavaParser.RULE_emptyStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(MiniJavaParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrintStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_printStatement;
    return this;
}

PrintStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatementContext.prototype.constructor = PrintStatementContext;

PrintStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrintStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterPrintStatement(this);
	}
};

PrintStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitPrintStatement(this);
	}
};

PrintStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitPrintStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.PrintStatementContext = PrintStatementContext;

MiniJavaParser.prototype.printStatement = function() {

    var localctx = new PrintStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, MiniJavaParser.RULE_printStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(MiniJavaParser.T__20);
        this.state = 160;
        this.match(MiniJavaParser.T__21);
        this.state = 161;
        this.match(MiniJavaParser.T__22);
        this.state = 162;
        this.match(MiniJavaParser.T__21);
        this.state = 163;
        this.match(MiniJavaParser.T__23);
        this.state = 164;
        this.match(MiniJavaParser.T__9);
        this.state = 165;
        this.expression(0);
        this.state = 166;
        this.match(MiniJavaParser.T__13);
        this.state = 167;
        this.match(MiniJavaParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitExpressionStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.ExpressionStatementContext = ExpressionStatementContext;

MiniJavaParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, MiniJavaParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.expression(0);
        this.state = 170;
        this.match(MiniJavaParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitReturnStatement(this);
	}
};

ReturnStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitReturnStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.ReturnStatementContext = ReturnStatementContext;

MiniJavaParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, MiniJavaParser.RULE_returnStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(MiniJavaParser.T__24);
        this.state = 174;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniJavaParser.T__9) | (1 << MiniJavaParser.T__26) | (1 << MiniJavaParser.T__27) | (1 << MiniJavaParser.T__28))) !== 0) || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (MiniJavaParser.T__43 - 44)) | (1 << (MiniJavaParser.T__44 - 44)) | (1 << (MiniJavaParser.T__45 - 44)) | (1 << (MiniJavaParser.T__46 - 44)) | (1 << (MiniJavaParser.INTEGER - 44)) | (1 << (MiniJavaParser.IDENTIFIER - 44)))) !== 0)) {
            this.state = 173;
            this.expression(0);
        }

        this.state = 176;
        this.match(MiniJavaParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_blockStatement;
    return this;
}

BlockStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatementContext.prototype.constructor = BlockStatementContext;

BlockStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

BlockStatementContext.prototype.localVariableDeclarationStatement = function() {
    return this.getTypedRuleContext(LocalVariableDeclarationStatementContext,0);
};

BlockStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterBlockStatement(this);
	}
};

BlockStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitBlockStatement(this);
	}
};

BlockStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitBlockStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.BlockStatementContext = BlockStatementContext;

MiniJavaParser.prototype.blockStatement = function() {

    var localctx = new BlockStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, MiniJavaParser.RULE_blockStatement);
    try {
        this.state = 180;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 178;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 179;
            this.localVariableDeclarationStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LocalVariableDeclarationStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_localVariableDeclarationStatement;
    return this;
}

LocalVariableDeclarationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocalVariableDeclarationStatementContext.prototype.constructor = LocalVariableDeclarationStatementContext;

LocalVariableDeclarationStatementContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

LocalVariableDeclarationStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(MiniJavaParser.IDENTIFIER, 0);
};

LocalVariableDeclarationStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LocalVariableDeclarationStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterLocalVariableDeclarationStatement(this);
	}
};

LocalVariableDeclarationStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitLocalVariableDeclarationStatement(this);
	}
};

LocalVariableDeclarationStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitLocalVariableDeclarationStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.LocalVariableDeclarationStatementContext = LocalVariableDeclarationStatementContext;

MiniJavaParser.prototype.localVariableDeclarationStatement = function() {

    var localctx = new LocalVariableDeclarationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, MiniJavaParser.RULE_localVariableDeclarationStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.type();
        this.state = 183;
        this.match(MiniJavaParser.IDENTIFIER);
        this.state = 186;
        _la = this._input.LA(1);
        if(_la===MiniJavaParser.T__25) {
            this.state = 184;
            this.match(MiniJavaParser.T__25);
            this.state = 185;
            this.expression(0);
        }

        this.state = 188;
        this.match(MiniJavaParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.primaryExpression = function() {
    return this.getTypedRuleContext(PrimaryExpressionContext,0);
};

ExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(MiniJavaParser.IDENTIFIER, 0);
};

ExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



MiniJavaParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 38;
    this.enterRecursionRule(localctx, 38, MiniJavaParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        switch(this._input.LA(1)) {
        case MiniJavaParser.T__27:
        case MiniJavaParser.T__28:
            this.state = 191;
            _la = this._input.LA(1);
            if(!(_la===MiniJavaParser.T__27 || _la===MiniJavaParser.T__28)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 192;
            this.expression(10);
            break;
        case MiniJavaParser.T__9:
        case MiniJavaParser.T__43:
        case MiniJavaParser.T__44:
        case MiniJavaParser.T__45:
        case MiniJavaParser.T__46:
        case MiniJavaParser.INTEGER:
        case MiniJavaParser.IDENTIFIER:
            this.state = 193;
            this.primaryExpression();
            break;
        case MiniJavaParser.T__26:
            this.state = 194;
            this.match(MiniJavaParser.T__26);
            this.state = 195;
            this.match(MiniJavaParser.IDENTIFIER);
            this.state = 196;
            this.match(MiniJavaParser.T__9);
            this.state = 197;
            this.match(MiniJavaParser.T__13);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 240;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 238;
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 200;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 201;
                    _la = this._input.LA(1);
                    if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (MiniJavaParser.T__29 - 30)) | (1 << (MiniJavaParser.T__30 - 30)) | (1 << (MiniJavaParser.T__31 - 30)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 202;
                    this.expression(10);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 203;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 204;
                    _la = this._input.LA(1);
                    if(!(_la===MiniJavaParser.T__27 || _la===MiniJavaParser.T__32)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 205;
                    this.expression(9);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 206;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 207;
                    _la = this._input.LA(1);
                    if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (MiniJavaParser.T__33 - 34)) | (1 << (MiniJavaParser.T__34 - 34)) | (1 << (MiniJavaParser.T__35 - 34)) | (1 << (MiniJavaParser.T__36 - 34)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 208;
                    this.expression(8);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 209;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 210;
                    _la = this._input.LA(1);
                    if(!(_la===MiniJavaParser.T__37 || _la===MiniJavaParser.T__38)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 211;
                    this.expression(7);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 212;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 213;
                    this.match(MiniJavaParser.T__39);
                    this.state = 214;
                    this.expression(6);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 215;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 216;
                    this.match(MiniJavaParser.T__40);
                    this.state = 217;
                    this.expression(5);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 218;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 219;
                    this.match(MiniJavaParser.T__41);
                    this.state = 220;
                    this.expression(4);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 221;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 222;
                    this.match(MiniJavaParser.T__42);
                    this.state = 223;
                    this.expression(3);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 224;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 225;
                    this.match(MiniJavaParser.T__25);
                    this.state = 226;
                    this.expression(2);
                    break;

                case 10:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 227;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 228;
                    this.match(MiniJavaParser.T__21);
                    this.state = 229;
                    this.match(MiniJavaParser.IDENTIFIER);
                    this.state = 230;
                    this.match(MiniJavaParser.T__9);
                    this.state = 232;
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniJavaParser.T__9) | (1 << MiniJavaParser.T__26) | (1 << MiniJavaParser.T__27) | (1 << MiniJavaParser.T__28))) !== 0) || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (MiniJavaParser.T__43 - 44)) | (1 << (MiniJavaParser.T__44 - 44)) | (1 << (MiniJavaParser.T__45 - 44)) | (1 << (MiniJavaParser.T__46 - 44)) | (1 << (MiniJavaParser.INTEGER - 44)) | (1 << (MiniJavaParser.IDENTIFIER - 44)))) !== 0)) {
                        this.state = 231;
                        this.expressionList();
                    }

                    this.state = 234;
                    this.match(MiniJavaParser.T__13);
                    break;

                case 11:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniJavaParser.RULE_expression);
                    this.state = 235;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 236;
                    this.match(MiniJavaParser.T__21);
                    this.state = 237;
                    this.match(MiniJavaParser.IDENTIFIER);
                    break;

                } 
            }
            this.state = 242;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function PrimaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_primaryExpression;
    return this;
}

PrimaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;

PrimaryExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimaryExpressionContext.prototype.INTEGER = function() {
    return this.getToken(MiniJavaParser.INTEGER, 0);
};

PrimaryExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(MiniJavaParser.IDENTIFIER, 0);
};

PrimaryExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

PrimaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitPrimaryExpression(this);
	}
};

PrimaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitPrimaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.PrimaryExpressionContext = PrimaryExpressionContext;

MiniJavaParser.prototype.primaryExpression = function() {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, MiniJavaParser.RULE_primaryExpression);
    var _la = 0; // Token type
    try {
        this.state = 259;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.match(MiniJavaParser.T__9);
            this.state = 244;
            this.expression(0);
            this.state = 245;
            this.match(MiniJavaParser.T__13);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 247;
            this.match(MiniJavaParser.T__43);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 248;
            this.match(MiniJavaParser.T__44);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 249;
            this.match(MiniJavaParser.T__45);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 250;
            this.match(MiniJavaParser.T__46);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 251;
            this.match(MiniJavaParser.INTEGER);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 252;
            this.match(MiniJavaParser.IDENTIFIER);
            this.state = 253;
            this.match(MiniJavaParser.T__9);
            this.state = 255;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniJavaParser.T__9) | (1 << MiniJavaParser.T__26) | (1 << MiniJavaParser.T__27) | (1 << MiniJavaParser.T__28))) !== 0) || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (MiniJavaParser.T__43 - 44)) | (1 << (MiniJavaParser.T__44 - 44)) | (1 << (MiniJavaParser.T__45 - 44)) | (1 << (MiniJavaParser.T__46 - 44)) | (1 << (MiniJavaParser.INTEGER - 44)) | (1 << (MiniJavaParser.IDENTIFIER - 44)))) !== 0)) {
                this.state = 254;
                this.expressionList();
            }

            this.state = 257;
            this.match(MiniJavaParser.T__13);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 258;
            this.match(MiniJavaParser.IDENTIFIER);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniJavaParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniJavaListener ) {
        listener.exitExpressionList(this);
	}
};

ExpressionListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MiniJavaVisitor ) {
        return visitor.visitExpressionList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MiniJavaParser.ExpressionListContext = ExpressionListContext;

MiniJavaParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, MiniJavaParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.expression(0);
        this.state = 266;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniJavaParser.T__14) {
            this.state = 262;
            this.match(MiniJavaParser.T__14);
            this.state = 263;
            this.expression(0);
            this.state = 268;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


MiniJavaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 19:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MiniJavaParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 1);
		case 9:
			return this.precpred(this._ctx, 13);
		case 10:
			return this.precpred(this._ctx, 12);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MiniJavaParser = MiniJavaParser;
