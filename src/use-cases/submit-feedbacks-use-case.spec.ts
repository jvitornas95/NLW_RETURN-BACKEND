import { SubmitFeedbackUseCase } from "./submit-feedbacks-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const SubmitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feefback', () => {
    it('should be able to submit a feedback', async () => {

        await expect(SubmitFeedback.execute({
            type: 'BUG',
            comment: 'Esta tudo ferrado',
            screenshot: 'data:image/png;base64/dsadsadsdsadasd'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without a type', async () => {

        await expect(SubmitFeedback.execute({
            type: '',
            comment: 'Esta tudo ferrado',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without a comment', async () => {

        await expect(SubmitFeedback.execute({
            type: 'BUG',
            comment: '',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with a invalid screenshot', async () => {

        await expect(SubmitFeedback.execute({
            type: 'BUG',
            comment: 'TUDO ERRADO',
            screenshot: 'dsdsadsdsdsda'
        })).rejects.toThrow();
    });
});