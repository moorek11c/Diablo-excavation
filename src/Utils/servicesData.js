import bulldozerImg from "../Assets/social/bulldozerIcon.png";
import concreteIcon from "../Assets/social/concreteIcon.png";
import pipeIcon from "../Assets/social/pipeIcon.png";
import twentyfour from "../Assets/social/emergencyIcon.png";

// concretePhotos
import concrete1 from "../Assets/concrete.asphalt/asphalt-cutting.jpeg";
import concrete2 from "../Assets/concrete.asphalt/concrete-repair.jpeg";
import concrete3 from "../Assets/concrete.asphalt/cutconcrete.jpeg";
import concrete4 from "../Assets/concrete.asphalt/driveway-concrete.jpeg";

// excavation
import excavation1 from "../Assets/Excavation/largeGrade.jpeg";
import excavation2 from "../Assets/Excavation/gravelSpread.jpeg";
import excavation3 from "../Assets/Excavation/double-pipe-trench.jpeg";
import excavation4 from "../Assets/Excavation/grading.jpeg";

// utilities
import utility1 from "../Assets/utilities/c900tap.jpeg";
import utility2 from "../Assets/utilities/roadcross.jpeg";
import utility3 from "../Assets/utilities/expose2 Large.jpeg";
import utility4 from "../Assets/utilities/vault&pipe.jpeg";

// Emergency
import emergency from "../Assets/EmergencyImages/emergency1.jpeg";
import emergency2 from "../Assets/EmergencyImages/emergency2.jpeg";
import emergency3 from "../Assets/EmergencyImages/emergency3.jpeg";
import emergency4 from "../Assets/EmergencyImages/emergency4.jpeg";

const serviceData = [
  {
    id: 1,
    image: bulldozerImg,
    title: "Excavation & Earthworks",
    description:
      "Our excavation and earthworks services provide a solid foundation for any construction project, from residential developments to large commercial sites. With a focus on safety, precision, and efficiency, we handle everything from site preparation and grading to trenching and land clearing. Our skilled team and state-of-the-art equipment ensure that each project is completed on schedule and meets all regulatory standards. We prioritize careful planning and execution to minimize environmental impact and optimize land stability, delivering reliable groundwork that supports long-term durability. Trust us for all your earthworks needs, where quality and expertise come together to build a strong foundation for success.",
    photos: [excavation1, excavation2, excavation3, excavation4],
  },
  {
    id: 2,
    image: concreteIcon,
    title: "Concrete and asphalt",
    description:
      "Our concrete and asphalt services are designed to deliver strength, durability, and aesthetic appeal for any project, from residential driveways to commercial parking lots and sidewalks. We prioritize high-quality materials and skilled craftsmanship to create surfaces that stand up to heavy traffic and challenging weather conditions. Whether you need a fresh installation, repair, or resurfacing, our team ensures precision and professionalism at every step. With our commitment to lasting quality and customer satisfaction, you can trust that your project will be completed on time and built to last.",
    photos: [concrete1, concrete2, concrete3, concrete4],
  },
  {
    id: 3,
    image: pipeIcon,
    title: "Underground Utilities",
    description:
      "Our underground utilities services are tailored to deliver reliable infrastructure for residential, commercial, and industrial projects. We handle every aspect, from installing water lines and sewer systems to electrical conduits and storm drainage, with a focus on precision and adherence to strict safety and regulatory standards. Equipped with advanced technology and an experienced team, we ensure minimal disruption and maximum efficiency, providing durable solutions that integrate seamlessly into the surrounding environment. Whether for new installations or upgrades to existing systems, our commitment to quality and expertise guarantees infrastructure you can rely on for years to come.",
    photos: [utility1, utility2, utility3, utility4],
  },
  {
    id: 4,
    image: twentyfour,
    title: "24Hr On Call Emergency Services",
    description:
      "Our 24-hour emergency construction services are here to respond swiftly and effectively to urgent needs, no matter the time or weather conditions. From structural repairs and storm damage restoration to essential infrastructure fixes, our skilled team is equipped to handle a wide range of emergency situations with speed and professionalism. We prioritize safety and efficiency, minimizing disruptions and getting your property back to operational standards as quickly as possible. Trust us to be there when you need immediate, reliable support for any construction emergency.",
    photos: [emergency, emergency2, emergency3, emergency4],
  },
];

export default serviceData;
