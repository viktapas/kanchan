echo "Setting up project..."
echo "Removing node_modueles [kanchan-ui]..."
rm -r node_modules
echo "Installing packages [kanchan-ui]..."
yarn
echo "Done. Moving to examples..."
cd "./examples"
echo "Removing node_modueles [examples]..."
rm -r node_modules
echo "Installing packages [examples]..."
yarn
echo "Done. You are all set!"
echo "Go to /examples and run npm run ios or android to fire up the project. Happy coding!"
