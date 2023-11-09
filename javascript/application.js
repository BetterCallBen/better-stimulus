import { Application } from "stimulus";
window.Stimulus = Application.start();

import DisableButtonController from "./controllers/disable_button_controller.js";
Stimulus.register("disable-button", DisableButtonController);
import SearchMovieController from "./controllers/search_movie_controller.js";
Stimulus.register("search-movie", SearchMovieController);
