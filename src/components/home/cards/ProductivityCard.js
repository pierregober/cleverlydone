import React from "react";

function ProductivityCard() {
  return (
    <div className="flex flex-column flex-basis-50 h-50vh jusCenter">
      <div className="flex flex-column flex-basis-50 h-50vh leftCards centerBottom ">
        <div className="card">
          <div className="cardInner prod">
            {/* <div>ProductivityCard</div> */}
            <div className="cardDetails">
              <div className="cardPic">
                <img
                  className="sectionImg"
                  width={125}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BQuCIVTcP_tjmlUTdFFQSWRii-U4p3X4oQ&usqp=CAU"
                />
              </div>
              <div className="courseStats">
                <div>Instructors</div>
                <div>Subscribers</div>
                <div>Course</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductivityCard;
