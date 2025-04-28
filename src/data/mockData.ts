
import { Symptom, Question, Result, SystemCategory } from "../types";

export const systemCategories: SystemCategory[] = [
  {
    id: "engine",
    name: "Engine",
    description: "Issues related to the car's engine system",
    iconName: "engine"
  },
  {
    id: "brakes",
    name: "Brakes",
    description: "Problems with the braking system",
    iconName: "brake"
  },
  {
    id: "electrical",
    name: "Electrical",
    description: "Issues with the electrical system and battery",
    iconName: "battery"
  },
  {
    id: "transmission",
    name: "Transmission",
    description: "Problems with the transmission system",
    iconName: "gear"
  },
  {
    id: "suspension",
    name: "Suspension",
    description: "Issues with the suspension and steering",
    iconName: "wheel"
  },
  {
    id: "fuel",
    name: "Fuel System",
    description: "Problems with the fuel delivery system",
    iconName: "fuel"
  }
];

export const symptoms: Symptom[] = [
  {
    id: "engine-not-starting",
    name: "Engine Not Starting",
    description: "Engine cranks but doesn't start, or doesn't crank at all",
    firstQuestionId: "q-engine-cranking",
    systemCategory: "engine"
  },
  {
    id: "check-engine-light",
    name: "Check Engine Light On",
    description: "The check engine indicator light is illuminated on the dashboard",
    firstQuestionId: "q-cel-steady",
    systemCategory: "engine"
  },
  {
    id: "brake-squeaking",
    name: "Brakes Making Noise",
    description: "Squeaking, grinding or other noises when braking",
    firstQuestionId: "q-brake-noise-type",
    systemCategory: "brakes"
  },
  {
    id: "hard-shifting",
    name: "Hard Shifting",
    description: "Difficulty shifting gears or rough/delayed gear changes",
    firstQuestionId: "q-transmission-type",
    systemCategory: "transmission"
  },
  {
    id: "battery-drain",
    name: "Battery Dies Overnight",
    description: "Car battery depletes when not in use",
    firstQuestionId: "q-battery-age",
    systemCategory: "electrical"
  },
  {
    id: "smoke-exhaust",
    name: "Smoke from Exhaust",
    description: "Visible smoke coming from the exhaust pipe",
    firstQuestionId: "q-smoke-color",
    systemCategory: "engine"
  }
];

export const questions: Question[] = [
  {
    id: "q-engine-cranking",
    text: "Does the engine crank when you try to start it?",
    answers: [
      {
        id: "a-cranks",
        text: "Yes, it cranks but doesn't start",
        nextQuestionId: "q-fuel-smell"
      },
      {
        id: "a-no-crank",
        text: "No, it doesn't crank at all",
        nextQuestionId: "q-lights-working"
      },
      {
        id: "a-click",
        text: "I hear clicking but no cranking",
        nextQuestionId: "q-battery-voltage"
      }
    ],
    systemCategory: "engine"
  },
  {
    id: "q-fuel-smell",
    text: "Do you smell fuel when trying to start the engine?",
    answers: [
      {
        id: "a-fuel-yes",
        text: "Yes, strong fuel smell",
        nextQuestionId: "q-spark-plugs"
      },
      {
        id: "a-fuel-no",
        text: "No fuel smell",
        isTerminal: true,
        resultId: "fuel-delivery-issue"
      }
    ],
    systemCategory: "engine"
  },
  {
    id: "q-spark-plugs",
    text: "When were the spark plugs last replaced?",
    answers: [
      {
        id: "a-plugs-recent",
        text: "Within the last year",
        isTerminal: true,
        resultId: "flooded-engine"
      },
      {
        id: "a-plugs-old",
        text: "Over a year ago or unknown",
        isTerminal: true,
        resultId: "spark-plug-issue"
      }
    ],
    systemCategory: "engine"
  },
  {
    id: "q-lights-working",
    text: "Do the dashboard lights and headlights work?",
    answers: [
      {
        id: "a-lights-yes",
        text: "Yes, lights are working",
        isTerminal: true,
        resultId: "starter-motor-issue"
      },
      {
        id: "a-lights-dim",
        text: "They're dim or flickering",
        isTerminal: true,
        resultId: "battery-low"
      },
      {
        id: "a-lights-no",
        text: "No, no lights at all",
        isTerminal: true,
        resultId: "battery-dead"
      }
    ],
    systemCategory: "electrical"
  },
  {
    id: "q-battery-voltage",
    text: "Have you checked the battery voltage?",
    answers: [
      {
        id: "a-voltage-normal",
        text: "Yes, it's 12.6V or higher",
        isTerminal: true,
        resultId: "starter-solenoid-issue"
      },
      {
        id: "a-voltage-low",
        text: "Yes, it's below 12.6V",
        isTerminal: true,
        resultId: "battery-low"
      },
      {
        id: "a-voltage-unknown",
        text: "No, haven't checked",
        isTerminal: true,
        resultId: "check-battery-first"
      }
    ],
    systemCategory: "electrical"
  },
  {
    id: "q-cel-steady",
    text: "Is the Check Engine Light steady or flashing?",
    answers: [
      {
        id: "a-cel-steady",
        text: "Steady (solid)",
        isTerminal: true,
        resultId: "minor-cel-issue"
      },
      {
        id: "a-cel-flashing",
        text: "Flashing/blinking",
        isTerminal: true,
        resultId: "severe-cel-issue"
      }
    ],
    systemCategory: "engine"
  },
  {
    id: "q-smoke-color",
    text: "What color is the smoke from the exhaust?",
    answers: [
      {
        id: "a-smoke-white",
        text: "White/gray smoke",
        isTerminal: true,
        resultId: "coolant-leak"
      },
      {
        id: "a-smoke-black",
        text: "Black smoke",
        isTerminal: true,
        resultId: "rich-fuel-mixture"
      },
      {
        id: "a-smoke-blue",
        text: "Blue smoke",
        isTerminal: true,
        resultId: "oil-burning"
      }
    ],
    systemCategory: "engine"
  }
];

export const results: Result[] = [
  {
    id: "fuel-delivery-issue",
    title: "Fuel Delivery Problem",
    description: "Your engine isn't getting the fuel it needs to run properly.",
    possibleCauses: [
      "Clogged fuel filter",
      "Faulty fuel pump",
      "Fuel line blockage",
      "Empty fuel tank (check gauge)"
    ],
    recommendedSolutions: [
      "Check and replace fuel filter",
      "Test fuel pump pressure",
      "Inspect fuel lines for damage",
      "Make sure there's fuel in the tank"
    ],
    severityLevel: "medium",
    systemCategory: "engine"
  },
  {
    id: "spark-plug-issue",
    title: "Spark Plug Problem",
    description: "Your engine isn't getting the spark needed for combustion.",
    possibleCauses: [
      "Worn out spark plugs",
      "Damaged spark plug wires",
      "Faulty ignition coil",
      "Distributor cap issues (older vehicles)"
    ],
    recommendedSolutions: [
      "Replace spark plugs",
      "Check and replace spark plug wires if damaged",
      "Test ignition coil function",
      "Have a professional inspect the ignition system"
    ],
    severityLevel: "medium",
    systemCategory: "engine"
  },
  {
    id: "flooded-engine",
    title: "Flooded Engine",
    description: "Too much fuel in the combustion chamber.",
    possibleCauses: [
      "Repeated attempts to start the vehicle",
      "Fuel injector leaking",
      "Excessive fuel pressure"
    ],
    recommendedSolutions: [
      "Wait 10-15 minutes before trying to start again",
      "Try starting with accelerator pedal fully depressed (consult owner's manual)",
      "Have fuel injectors inspected if problem persists"
    ],
    severityLevel: "low",
    systemCategory: "engine"
  },
  {
    id: "starter-motor-issue",
    title: "Starter Motor Problem",
    description: "The starter motor isn't engaging or turning the engine.",
    possibleCauses: [
      "Faulty starter motor",
      "Damaged flywheel teeth",
      "Bad starter relay",
      "Wiring issues to starter"
    ],
    recommendedSolutions: [
      "Test starter motor",
      "Inspect flywheel for damaged teeth",
      "Check and replace starter relay if needed",
      "Have a professional inspect the starting system"
    ],
    severityLevel: "medium",
    systemCategory: "electrical"
  },
  {
    id: "battery-low",
    title: "Low Battery",
    description: "Your battery doesn't have enough charge to start the engine.",
    possibleCauses: [
      "Old or failing battery",
      "Alternator not charging properly",
      "Parasitic drain",
      "Loose or corroded battery connections"
    ],
    recommendedSolutions: [
      "Jump-start the vehicle",
      "Charge the battery fully",
      "Clean battery terminals",
      "Test alternator output",
      "Replace battery if it's old or failing"
    ],
    severityLevel: "low",
    systemCategory: "electrical"
  },
  {
    id: "battery-dead",
    title: "Dead Battery",
    description: "Your battery has no charge and needs immediate attention.",
    possibleCauses: [
      "Lights or accessories left on",
      "Old battery that has failed",
      "Extreme cold weather",
      "Alternator failure",
      "Loose or corroded connections"
    ],
    recommendedSolutions: [
      "Jump-start the vehicle",
      "Replace the battery",
      "Check alternator function after replacing battery",
      "Ensure all lights and accessories are off when parking"
    ],
    severityLevel: "medium",
    systemCategory: "electrical"
  },
  {
    id: "starter-solenoid-issue",
    title: "Starter Solenoid Problem",
    description: "The solenoid that engages the starter isn't functioning.",
    possibleCauses: [
      "Faulty starter solenoid",
      "Bad ignition switch",
      "Loose or damaged wiring",
      "Neutral safety switch problem"
    ],
    recommendedSolutions: [
      "Test the starter solenoid",
      "Check ignition switch function",
      "Inspect and repair wiring to solenoid",
      "Verify neutral safety switch operation"
    ],
    severityLevel: "medium",
    systemCategory: "electrical"
  },
  {
    id: "check-battery-first",
    title: "Battery Needs Testing",
    description: "Your battery should be tested before diagnosing further.",
    possibleCauses: [
      "Battery may be old or failing",
      "Charging system issues",
      "Electrical system problems"
    ],
    recommendedSolutions: [
      "Test battery voltage (should be 12.6V+ when off)",
      "Have battery load tested at auto parts store",
      "Check alternator output (should be 13.5-14.5V when running)",
      "Inspect battery cables and connections"
    ],
    severityLevel: "low",
    systemCategory: "electrical"
  },
  {
    id: "minor-cel-issue",
    title: "Non-Critical Engine Issue",
    description: "Your check engine light indicates a problem that should be addressed soon but isn't immediately serious.",
    possibleCauses: [
      "Minor emissions system fault",
      "Loose gas cap",
      "Oxygen sensor fault",
      "Mass airflow sensor issue"
    ],
    recommendedSolutions: [
      "Check that gas cap is tight",
      "Have diagnostic codes read (many auto parts stores do this for free)",
      "Address the specific issue identified by the code",
      "Don't ignore - can lead to poor fuel economy and performance"
    ],
    severityLevel: "low",
    systemCategory: "engine"
  },
  {
    id: "severe-cel-issue",
    title: "Critical Engine Issue - Immediate Attention Required",
    description: "A flashing check engine light indicates a severe problem that could damage your catalytic converter or engine.",
    possibleCauses: [
      "Severe engine misfire",
      "Catalytic converter damage",
      "Major fuel system issue",
      "Ignition system failure"
    ],
    recommendedSolutions: [
      "Reduce speed and engine load immediately",
      "Have the vehicle towed if possible rather than driving further",
      "Get professional diagnosis right away",
      "Prepare for potential significant repairs"
    ],
    severityLevel: "critical",
    systemCategory: "engine"
  },
  {
    id: "coolant-leak",
    title: "Coolant Leak Into Combustion Chamber",
    description: "White smoke typically indicates coolant getting into places it shouldn't be.",
    possibleCauses: [
      "Blown head gasket",
      "Cracked cylinder head",
      "Cracked engine block",
      "Coolant leak into combustion chamber"
    ],
    recommendedSolutions: [
      "Stop driving immediately to prevent engine damage",
      "Have a compression test performed",
      "Check coolant level (but only when engine is cold)",
      "Seek professional repair - this is typically a major fix"
    ],
    severityLevel: "critical",
    systemCategory: "engine"
  },
  {
    id: "rich-fuel-mixture",
    title: "Rich Fuel Mixture",
    description: "Black smoke indicates unburned fuel - your engine is getting too much fuel or not enough air.",
    possibleCauses: [
      "Clogged air filter",
      "Faulty oxygen sensor",
      "Bad fuel injectors",
      "Malfunctioning fuel pressure regulator"
    ],
    recommendedSolutions: [
      "Replace air filter",
      "Check and replace oxygen sensors if needed",
      "Have fuel injectors cleaned or tested",
      "Test fuel pressure"
    ],
    severityLevel: "medium",
    systemCategory: "engine"
  },
  {
    id: "oil-burning",
    title: "Oil Burning Issue",
    description: "Blue smoke indicates oil is being burned in the combustion chamber.",
    possibleCauses: [
      "Worn valve seals",
      "Worn piston rings",
      "PCV valve failure",
      "Oil leaking past turbocharger seals (if equipped)"
    ],
    recommendedSolutions: [
      "Check oil level and consumption rate",
      "Replace PCV valve (relatively inexpensive first step)",
      "Engine compression test to diagnose deeper issues",
      "Major repairs likely needed if rings or valve seals are worn"
    ],
    severityLevel: "high",
    systemCategory: "engine"
  }
];

// Mock user data
export const mockUsers = [
  {
    id: "user1",
    email: "testuser@example.com",
    name: "Test User",
    role: "user"
  },
  {
    id: "admin1",
    email: "admin@example.com",
    name: "Admin User",
    role: "admin"
  }
];

// Mock vehicles
export const mockVehicles = [
  {
    id: "v1",
    userId: "user1",
    make: "Toyota",
    model: "Camry",
    year: 2018,
    mileage: 45000,
    engineType: "2.5L 4-cylinder"
  },
  {
    id: "v2",
    userId: "user1",
    make: "Honda",
    model: "Civic",
    year: 2015,
    mileage: 78000,
    engineType: "1.8L 4-cylinder"
  }
];
