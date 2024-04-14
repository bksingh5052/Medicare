function distanceCalculator(dist) {
    if(dist > 1000 ){
        console.log(typeof(dist))
        return (Math.round(dist / 1000)) + " KM";
    }
    else{ return Math.round(dist )+ " M" }
  }

  export default distanceCalculator;
