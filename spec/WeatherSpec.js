//returns stormy when random number is over 0.8

describe('Weather', function() {

  beforeEach(function(){
    thisWeather = new weather();
    spyOn(thisWeather, 'isWeatherStormy').and.returnValue(true);
  });

  it('checks weather and returns true when stormy', function() {
    expect(thisWeather.isWeatherStormy()).toEqual(true);
  })
})
