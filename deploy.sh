echo "Switching to branch master..."
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server"
scp -r build/* root@89.45.4.195:/var/www/89.45.4.195/

echo "Deployment complete"