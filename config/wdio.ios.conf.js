const path = require("path");
const { config } = require("./wdio.shared.conf");

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), "./test/specs/ios-findElements.spec.js"),
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "16.4",
    "appium:deviceName": "iPhone 14 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/UIKitCatalog.app"),
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [
  [
    "appium",
    {
      args: {
        address: "localhost",
        port: 4723,
        relaxedSecurity: true,
      },
      logPath: "./",
    },
  ],
];

exports.config = config;
