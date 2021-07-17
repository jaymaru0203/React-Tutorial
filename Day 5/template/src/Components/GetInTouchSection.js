import React from 'react';
import Card from './Card';

const GetInTouchSection = () => {
    return(
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row pb-5">
          <div className="col-4">
            <Card source="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Card 1" desc="Lorem Ipsum This is the Left Card" btnText="Button 1"/>
          </div>
          <div className="col-4">
            <Card source="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Center Card" desc="Lorem Ipsum This is the Center Card. Lorem Ipsum This is the Center Card. Lorem Ipsum This is the Center Card." btnText="Button 2" />
          </div>
          <div className="col-4">
            <Card source="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Card 3" desc="Lorem Ipsum This is the Right Card" btnText="Button 3"/>
          </div>
        </div>
      </div>
    </section>
    );
}

export default GetInTouchSection;