node {
    def app

    stage('Clone repository') {
        /* Cloning the Repository to our Workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image */

        app = docker.build("frehman/pipe1")
    }

    stage('Test image') {

        app.inside {
            echo "Tests passed"
        }
    }

    stage('Push image') {
        /*
                        You would need to first register with DockerHub before you can push images to your account
                */
        docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
            
            app.push("latest")
        }            
                stage('Run Container on Deployment Server'){
               def dockerRun = 'docker run -p 8088:8088 -d --name faisal-app frehman/pipe1:latest'
               sshagent(['dep-server']) {
               sh "ssh -o StrictHostKeyChecking=no frehman@10.24.2.193 ${dockerRun}"  
     }
            }
            
            }
                echo "Trying to Push Docker Build to DockerHub"
    }
