var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AnswerOptionSchema = new Schema({
	answerOption: Number,
	text: String,
	selectedByRespondents: Number,
	start_date: { type: Date, default: Date.now, required: true }
});

var AnswerOptionSchema = new Schema({
	answerOption: Number,
	text: String,
	selectedByRespondents: Number,
	questionId: {type: Schema.Types.ObjectId, ref: 'Question'}
});

module.exports = mongoose.model('AnswerOption', AnswerOptionSchema);