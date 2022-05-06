import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ comment, type, screenshot }: FeedbackCreateData) {

        await prisma.feedback.create({
            data: {
                comment,
                type,
                screenshot,
            }
        });
    };
}