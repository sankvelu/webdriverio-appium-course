/*
ios:
    macos: # indicate that we are using the macOS executor
      xcode: 14.3.1
    environment:
      IOS_VERSION: 16.4
      DEVICE_NAME: iPhone 14 Pro
    steps:
      - run:
          name: Install Rosetta 2
          command: |
            if /usr/sbin/softwareupdate --install-rosetta --agree-to-license; then
              echo "Rosetta installed successfully or already present"
            else
              echo "Rosetta installation failed"
              exit 1
            fi
      - checkout
      - run:
          name: Install nvm
          command: |
            # Install nvm (Node Version Manager)
            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
            # Ensure nvm is sourced in the current session
            source ~/.nvm/nvm.sh
      - run:
          name: Install Node.js v20.15.0 and npm
          command: |
            # Load nvm to make sure it's available
            source ~/.nvm/nvm.sh
            # Install Node.js v20.15.0 (npm will be installed automatically with Node.js)
            nvm install 20.15.0
            # Use Node.js v20.15.0 as the active version
            nvm use 20.15.0
            # Add npm binary to PATH explicitly
            export PATH="$HOME/.nvm/versions/node/v20.15.0/bin:$PATH"
            # Verify the installed Node.js and npm versions
            node -v
            npm -v
            npm install
            npm install -g appium
            appium -v
            appium -p 4723 &
            sleep 10
            npx wdio config/wdio.ios.conf.js
*/
