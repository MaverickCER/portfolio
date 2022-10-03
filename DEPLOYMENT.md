# Deployment  
## Production deployment at https://www.maverickmanasco.com  
0. Deployment is automatically done through Netlify once a PR is merged.
1. In an AWS environment with a S3 storage connected to cloudfront, the following instructions can be used.
1. Run the following commands:  
mkdir portfolio-clone  
cd portfolio-clone  
git clone https<span>://</span>github.com/MaverickCER/portfolio.git  
cd portfolio  
npm i  
npm run build  
start .  
2. Copy and paste the contents of the build folder into the appropriate storage path.
3. Invalidate cache as needed.

## About
While working at SWMC we had 30+ different websites and all of them had different requirements for deployment. All deployments had to be performed by System Administrators as Web Developers and Software Engineers did get access to the neccessary environment variables. However, for each jira task, a new deployment document had to be written. If there were problems with deployment, the deployment document wouldn't be updated and the problem would persist. This would often cause multiple delays in each task as QC also had to provide instructions. I suggested that a DEPLOYMENT.md file be created in each repository as a single source for deployment information. After this was implemented, I further simplified the documents so that most of the steps could be copy/pasted into terminal, which improved the overall experience for everyone involved and reduced delays.