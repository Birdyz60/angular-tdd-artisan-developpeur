import { createHttpFactory, HttpMethod, SpectatorHttp } from "@ngneat/spectator";
import { SecurityNumberService } from "./security-number.service";

describe('Security Number Service', () => {
  let spectator: SpectatorHttp<SecurityNumberService>;
  const createSpectator = createHttpFactory({
    service: SecurityNumberService,
  });

  beforeEach(() => spectator = createSpectator());

  it(`devrait retourner 'False' lorsque l'api retroune un 404`, (done) => {
    spectator.service.validate('1861013999001').subscribe((result) => {
      expect(result).toBeFalse();
      done();
    });

    spectator.expectOne('https://api.test/validate/1861013999001', HttpMethod.GET)
      .error(new ErrorEvent('Not Found'), {
        status: 404,
        statusText: 'Not Found'
      });
  });

  it(`devrait retourner 'True' lorsque l'api retroune un 200`, (done) => {
    spectator.service.validate('1861013055001').subscribe((result) => {
      expect(result).toBeTrue();
      done();
    });

    spectator.expectOne('https://api.test/validate/1861013055001', HttpMethod.GET)
      .flush("OK", {
        status: 200,
        statusText: 'OK'
      });
  });
});
