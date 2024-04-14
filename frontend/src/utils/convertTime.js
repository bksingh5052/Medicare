const convertTime = time => {
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0]); // Changed from const to let
    const minutes = parseInt(timeParts[1]);
    let meridien = 'am';
    if (hours >= 12) {
        meridien = 'pm';
        if (hours > 12) {
            hours -= 12;
        }
    }
    return (
        hours.toString().padStart(2) + 
        ":" +
        minutes.toString().padStart(2, '0') +
        " " +
        meridien
    );
};

export default convertTime;