/*
  EDIT THIS FILE whenever you want to update the portfolio.
  The website reads the project cards and profile information from here.

  To add a project:
  1. Copy an existing object inside projects: [ ... ]
  2. Change the title, category, description, tags, image, and link.
  3. Put the image in assets/ if you have one.
*/
window.PORTFOLIO = {
  name: "Dylan Miller",
  headline: "Mechanical Engineering • Design • Prototyping • Testing",
  school: "Texas A&M University",
  intro:
    "Engineering student focused on turning ideas into functional prototypes through CAD, hands-on fabrication, controlled testing, and iterative problem solving.",
  email: "YOUR_EMAIL@example.com",
  linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN",
  resumeFile: "resume.pdf",

  stats: [
    { value: "3+", label: "Controlled test variables" },
    { value: "10", label: "Launch angles tested" },
    { value: "3D", label: "Printed prototype development" },
    { value: "7+", label: "Energy transformations" }
  ],

  featured: {
    title: "Scent-Based Alarm Clock",
    eyebrow: "Featured Engineering Project",
    description:
      "Developed the first draft of a patent-pending scent-based alarm clock. Led CAD development, component integration, soldering, breadboard circuitry, 3D printing, and controlled testing of fan speed, placement, and scent selection.",
    image: "assets/alarm-cad.png",
    pdf: "documents/engineering-project-portfolio.pdf",
    tags: ["CAD", "3D Printing", "Soldering", "Testing", "Prototype Development"]
  },

  projects: [
    {
      title: "Scent-Based Alarm Clock",
      category: "Engineering Design",
      description:
        "Led the CAD development and physical integration of the reservoir, atomization disk, fan, wiring, and electrical components into a functional 3D-printed prototype.",
      image: "assets/alarm-cad.png",
      link: "documents/engineering-project-portfolio.pdf",
      tags: ["CAD", "3D Printing", "Soldering"]
    },
    {
      title: "T-Shirt Cannon",
      category: "Physics / Mechanical",
      description:
        "Collaborated to build a functional launcher for a 500+ student pep rally. Tested 5+ pressure levels, 10 launch angles, and 5+ folding methods to improve distance and accuracy.",
      image: "assets/tshirt-cannon.png",
      link: "documents/physics-project-portfolio.pdf",
      tags: ["Testing", "Projectile Motion", "Iteration"]
    },
    {
      title: "Catapult",
      category: "Physics / Mechanical",
      description:
        "Independently led mechanical development and construction while testing arm length, spring tension, and release angle across multiple target distances.",
      image: "assets/catapult.png",
      link: "documents/physics-project-portfolio.pdf",
      tags: ["Mechanisms", "Experimental Design", "Precision"]
    },
    {
      title: "Rube Goldberg Machine",
      category: "Physics / Systems",
      description:
        "Designed and built a multi-stage machine incorporating 7+ energy transformations and personally led the mechanical design of the final stages.",
      image: "assets/rube-goldberg.png",
      link: "documents/physics-project-portfolio.pdf",
      tags: ["Systems", "Mechanisms", "Energy"]
    },
    {
      title: "CAD & Manufacturing Projects",
      category: "CAD / Manufacturing",
      description:
        "Designed a toy train, custom chess piece, and soccer jersey charm. Also developed manufacturing parts and learned to operate Haas CNC lathes and mills while producing a wind-powered motor.",
      image: "assets/cad-projects.png",
      link: "documents/engineering-project-portfolio.pdf",
      tags: ["CAD", "CNC", "Manufacturing"]
    },
    {
      title: "Additional Physics Builds",
      category: "Physics / Prototyping",
      description:
        "Additional hands-on builds included a cardboard boat, toothpick tower, mousetrap car, electric generator, hot-air balloon, and a Boulder Adventure Park review project.",
      image: "assets/physics-builds.png",
      link: "documents/physics-project-portfolio.pdf",
      tags: ["Prototyping", "Testing", "Problem Solving"]
    }
  ]
};
