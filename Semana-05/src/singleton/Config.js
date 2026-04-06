
class Config {
  constructor() {
    if (Config.instance) return Config.instance;

    this.appName = "Plataforma Alquiler Vacacional";
    Config.instance = this;
  }
}

export const config = new Config();
