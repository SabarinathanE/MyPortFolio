import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {

  return (
    
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading text-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl" style={{fontSize:"18px"}}>{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading text-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        <div className="text-content" style={{fontSize:"18px"}}>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading text-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        <div className="text-content" style={{fontSize:"18px"}}>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
        </div>

      </section>
    </main>
  );
}

export default About;