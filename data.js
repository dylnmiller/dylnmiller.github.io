/*
  EDIT THIS FILE whenever you want to update the portfolio.
  The website reads the project cards and profile information from here.

  To add a project:
  1. Copy an existing object inside projects: [ ... ]
  2. Change the title, category, description, tags, image, and link.
  3. Put the image or PDF in the main/root folder of this repository.
*/

window.PORTFOLIO = {
  name: "Dylan Miller",
  headline: "Pursuing Mechanical Engineering | 2026 Terry Scholar | University Honors Program",
  school: "Texas A&M University",
  intro: "Aspiring Vehicle Validation and Testing Engineer actively seeking a 2027 Summer Mechanical Engineering Internship. Hands-on experience with turning ideas into functional prototypes through CAD, CNC Machinery, fabrication, controlled testing, and iterative problem solving.",

  email: "dylanmiller212221@gmail.com",
  linkedin: "https://www.linkedin.com/in/dylanmiller4",

  stats: [
    { value: "30+", label: "Physics projects and labs designed, built, and tested." },
    { value: "100%", label: "Up-time across $200,000+ of Haas CNC lathes and mills." },
    { value: "9th", label: "Placement in the FIRST Tech Challenge, involving 200,000+ students across 110+ countries." },
    { value: "8+", label: "Technical engineering projects." }
  ],

  featured: {
    title: "Scent-Based Alarm Clock",
    eyebrow: "Featured Engineering Project",
    description:
      "Developed the first prototype of a patent-pending scent-based alarm clock. Successfully presented and defended my alarm clock prototype before 5 industry professionals. Led CAD development, component integration, soldering, breadboard circuitry, 3D printing, and controlled testing of fan speed, placement, and scent selection.",
    image: "alarm-cad.png",
    pdf: "Engineering Project Portfolio (3).pdf",
    tags: [
      "CAD Design",
      "Presentation",
      "Soldering",
      "Data Collection",
      "Prototype Development"
    ]
  },

  projects: [
    {
      title: "Scent-Based Alarm Clock",
      category: "Engineering Design",
      description:
        "Managed the CAD development and physical integration of the reservoir, atomization disk, fan, wiring, and electrical components into a functional 3D-printed prototype.",
      image: "alarm-cad.png",
      link: "Engineering Project Portfolio (3).pdf",
      tags: ["CAD", "3D Printing", "Soldering"]
    },

    {
      title: "FTC Robotics Drivetrain & Lift Arm",
      category: "Robotics / Mechanical",
      description:
        "Calculated torque requirements and mechanical advantages to optimize a 4-motor drivetrain, increasing robot velocity by 15%. Designed and integrated a 3D-printed intake and lift arm mechanism in Fusion 360, reducing structural weight by 10%. Placed 9th internationally among 200,000+ students.",
      image: "ftc-lift-arm.jpg",
      link: "Engineering Project Portfolio (3).pdf",
      tags: ["Fusion 360", "Drivetrain Design", "C#", "Competition"]
    },

    {
      title: "T-Shirt Cannon",
      category: "Physics / Mechanical",
      description:
        "Collaborated to build a functional launcher for a 500+ student pep rally. Tested 5+ pressure levels, 10 launch angles, and 5+ folding methods to improve distance and accuracy.",
      image: "tshirt-cannon.png",
      link: "Physics Project Portfolio (2).pdf",
      tags: ["Testing", "Projectile Motion", "Iteration"]
    },

    {
      title: "Catapult",
      category: "Physics / Mechanical",
      description:
        "Independently led mechanical development and construction while testing arm length, spring tension, and release angle across multiple target distances.",
      image: "catapult.png",
      link: "Physics Project Portfolio (2).pdf",
      tags: ["Mechanisms", "Experimental Design", "Precision"]
    },

    {
      title: "Rube Goldberg Machine",
      category: "Physics / Systems",
      description:
        "Designed and built a multi-stage machine incorporating 7+ energy transformations, personally leading the mechanical design of the final stages.",
      image: "rube-goldberg.png",
      link: "Physics Project Portfolio (2).pdf",
      tags: ["Systems", "Mechanisms", "Energy"]
    },

    {
      title: "CNC Manufacturing & Machining",
      category: "CAD / Manufacturing",
      description:
        "Operated Haas CNC lathes and mills to manufacture functional components from metal stock, including a wind-powered miniature air pump motor. Video shows live machining of a component from raw stock to finished part.",
      video: "cnc-machining.mp4",
      link: "Engineering Project Portfolio (3).pdf",
      tags: ["CNC", "Manufacturing", "Haas Machinery"]
    },

    {
      title: "CAD & Manufacturing Projects",
      category: "CAD / Manufacturing",
      description:
        "Designed a toy train, custom chess piece, and soccer jersey charm. Also developed manufacturing parts and learned to operate Haas CNC lathes and mills while producing a wind-powered motor.",
      image: "toy-train-cad.jpg",
      link: "Engineering Project Portfolio (3).pdf",
      tags: ["CAD", "CNC", "Manufacturing"]
    },

    {
      title: "Additional Physics Builds",
      category: "Physics / Prototyping",
      description:
        "Additional hands-on builds included a cardboard boat, toothpick tower, mousetrap car, electric generator, hot-air balloon, and a Boulder Adventure Park review project.",
      image: "physics-builds.png",
      link: "Physics Project Portfolio (2).pdf",
      tags: ["Prototyping", "Testing", "Problem Solving"]
    }
  ]
};
