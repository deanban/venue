import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.605795179947!2d-73.97760724849194!3d40.68265394724475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays+Center!5e0!3m2!1sen!2sus!4v1545358183245"
        width="100%"
        height="500px"
        frameBorder="0"
        allowfullscreen
      />
      <div className="location_tag">
        <div>LOCATION</div>
      </div>
    </div>
  );
};

export default Location;
