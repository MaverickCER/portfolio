# Deployment
## Production deployment at https://www.maverickmanasco.com
1. Run the following commands:  
mkdir portfolio-clone  
cd portfolio-clone  
git clone https<span>://</span>github.com/MaverickCER/portfolio.git  
cd portfolio  
npm i  
npm run build  
serve build    
2. Perform local tests to ensure that everything works as expected.
3. When ready, run the following commands.  
git merge origin/main
git commit -m "deploying to production"
git push
4. Deployment to production will be done by Netlify within 15 minutes.

## About
While working at SWMC we had 30+ different websites and all of them had different requirements for deployment. All deployments had to be performed by System Administrators as Web Developers and Software Engineers did get access to the neccessary environment variables. However, for each jira task, a new deployment document had to be written. If there were problems with deployment, the deployment document wouldn't be updated and the problem would persist. This would often cause multiple delays in each task as QC also had to provide instructions. I suggested that a DEPLOYMENT.md file be created in each repository as a single source for deployment information. After this was implemented, I further simplified the documents so that most of the steps could be copy/pasted into terminal, which improved the overall experience for everyone involved and reduced delays.