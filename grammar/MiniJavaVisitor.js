// Generated from MiniJava.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MiniJavaParser.

function MiniJavaVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MiniJavaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MiniJavaVisitor.prototype.constructor = MiniJavaVisitor;

// Visit a parse tree produced by MiniJavaParser#translationUnit.
MiniJavaVisitor.prototype.visitTranslationUnit = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#classDeclaration.
MiniJavaVisitor.prototype.visitClassDeclaration = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#classMember.
MiniJavaVisitor.prototype.visitClassMember = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#field.
MiniJavaVisitor.prototype.visitField = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#mainMethod.
MiniJavaVisitor.prototype.visitMainMethod = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#method.
MiniJavaVisitor.prototype.visitMethod = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#parameters.
MiniJavaVisitor.prototype.visitParameters = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#parameter.
MiniJavaVisitor.prototype.visitParameter = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#type.
MiniJavaVisitor.prototype.visitType = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#statement.
MiniJavaVisitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#block.
MiniJavaVisitor.prototype.visitBlock = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#ifStatement.
MiniJavaVisitor.prototype.visitIfStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#whileStatement.
MiniJavaVisitor.prototype.visitWhileStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#emptyStatement.
MiniJavaVisitor.prototype.visitEmptyStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#printStatement.
MiniJavaVisitor.prototype.visitPrintStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#expressionStatement.
MiniJavaVisitor.prototype.visitExpressionStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#returnStatement.
MiniJavaVisitor.prototype.visitReturnStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#blockStatement.
MiniJavaVisitor.prototype.visitBlockStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#localVariableDeclarationStatement.
MiniJavaVisitor.prototype.visitLocalVariableDeclarationStatement = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#expression.
MiniJavaVisitor.prototype.visitExpression = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#primaryExpression.
MiniJavaVisitor.prototype.visitPrimaryExpression = function(ctx) {
};


// Visit a parse tree produced by MiniJavaParser#expressionList.
MiniJavaVisitor.prototype.visitExpressionList = function(ctx) {
};



exports.MiniJavaVisitor = MiniJavaVisitor;