import * as multer from "multer";
import * as path from "path";
import * as express from "express";
import { Logger } from "./logger";
import { SupplierService } from "./services/supplier.service";
import 'dotenv/config'

class App {
    public express: express.Application;
    public logger: Logger;
    public supplierService: SupplierService;
    private multer: multer.Multer;


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
        this.supplierService = new SupplierService();
    }

    // Configure Express middleware.
    private middleware(): void {
        const storageEngine = multer.diskStorage({
            destination: "./images",
            filename: (_req, file, cb) => {
              cb(null, `${Date.now()}__${file.originalname.replace(/\s+/g, '')}`);
            },
          });
        const checkFileType = function (file, cb) {
            //Allowed file extensions
            const fileTypes = /jpeg|jpg|png|gif|svg|avif|webp/;
          
            //check extension names
            const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
          
            const mimeType = fileTypes.test(file.mimetype);
          
            if (mimeType && extName) {
              return cb(null, true);
            } else {
              cb("Error: Not a valid image");
            }
        };
        this.multer = multer({
            storage: storageEngine,
            fileFilter: (_req, file, cb) => {
                checkFileType(file, cb);
            },
        });
    }

    private routes(): void {
        // create supplier route
        this.express.post('/api/supplier', this.multer.single("logo"), (req, res) => {
            this.logger.info("Creating Supplier");
            this.logger.info(req.file.filename);
            this.supplierService.createSupplier(req.body, req.file.filename).then(data => res.json(data));
        });

        // handle undefined routes
        this.express.use("*", (_req, res, _next) => {
            res.send("incorrect url");
        });
    }
}

export default new App().express;