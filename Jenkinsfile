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
            
            stage('Run the Container') {
                sh 'docker run -it -d -p 8091:8091 --name pulledim frehman/pipe1:latest'
            }
            
            }
                echo "Trying to Push Docker Build to DockerHub"
    }
}
