pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Install dependencies
                    sh 'pnpm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'pnpm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy application
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }

    post {
        always {
            script {
                // Clean up
                sh 'docker-compose down'
            }
        }
    }
}