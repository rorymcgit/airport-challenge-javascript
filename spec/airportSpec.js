// airport object lands and takes off planes

describe('Airport', function() {
  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('contains an empty plane array by default', function(){
    expect(airport.planes).toEqual([]);
  });

  it('landPlane adds a plane to the array', function(){
    airport.landPlane("plane1");
    expect(airport.planes).toContain("plane1");
  });

  it('takes a plane off and removes it from the array', function(){
    airport.landPlane("plane1");
    airport.takeOff();
    expect(airport.planes).toEqual([]);
  });
});
