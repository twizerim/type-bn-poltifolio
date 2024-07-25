import express, { Request, Response } from "express";
import { errormessage } from "../../utils/errormessage";
import { successmessage } from "../../utils/successmessage";
import Folders from "../../model/blogs/folders";
import cloudinary from "../../utils/cloud/cloudinary";

class DocumentController {
    public static async postdocuma(req: Request, res: Response): Promise<void> {
        try {
            const { category } = req.body;
            const documentPath = req.file?.path || "";

            if (!req.file) {
                return errormessage(res, 404, 'Please upload your document');
            }

            const result = await cloudinary.uploader.upload(documentPath, {
                folder: 'Documents'
            });

            const newdocuma = await Folders.create({
                category: category.toString(),
                document: {
                    public_id: result.public_id,
                    url: result.secure_url,
                }
            });

            if (!newdocuma) {
                return errormessage(res, 404, 'No document posted');
            } else {
                return successmessage(res, 201, 'Document successfully posted', newdocuma);
            }
        } catch (error) {
            console.log(error);
            return errormessage(res, 500, 'An error occurred');
        }
    }

    public static async getdocuma(req: Request, res: Response): Promise<void> {
        const documa = await Folders.find();
        if (!documa) {
            return errormessage(res, 401, 'No document found');
        } else {
            return successmessage(res, 201, 'All documents retrieved', documa);
        }
    }

    public static async deletdocuma(req: Request, res: Response): Promise<void> {
        const documa = await Folders.deleteMany();
        if (!documa) {
            return errormessage(res, 401, 'No document found');
        } else {
            return successmessage(res, 201, 'All documents deleted', documa);
        }
    }
}

export { DocumentController };
