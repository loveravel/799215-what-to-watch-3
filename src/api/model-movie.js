export default class ModelMovie {
  constructor(data) {
    this.id = data.id || null;
    this.name = data.name || ``;
    this.posterImage = data.poster_image || ``;
    this.previewImage = data.preview_image || ``;
    this.backgroundImage = data.background_image || ``;
    this.backgroundColor = data.background_color || ``;
    this.video = data.video_link || ``;
    this.previewVideo = data.preview_video_link || ``;
    this.description = data.description || ``;
    this.rating = data.rating || null;
    this.scoresCount = data.scores_count || null;
    this.director = data.director || ``;
    this.starring = data.starring || [];
    this.runTime = data.run_time || null;
    this.genre = data.genre || ``;
    this.released = data.released || null;
    this.isFavorite = data.is_favorite || false;
  }

  toInitial() {

  }

  static parseMovie(data) {
    return new ModelMovie(data);
  }

  static parseFilms(data) {
    return data.map(ModelMovie.parseMovie);
  }
}
