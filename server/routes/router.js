import { Router } from "express";
/** import all controllers */

import * as controller from '../controller/app.controller.js'

const router = Router();

router.route("/country").get(controller.fetchCountry);
router.route("/state/getstate/:country_id").get(controller.fetchState);
router.route("/city/getcity/:state_id").get(controller.fetchCity);


export default router