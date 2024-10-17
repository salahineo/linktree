pipeline {
    agent any

    environment {
        DEPLOY_PATH = credentials('LINKTREE_DEPLOY_PATH')
        DISCORD_WEBHOOK = credentials('DISCORD_BUILD_CHANNEL_WEBHOOK')
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

         stage('Test') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Clean') {
            steps {
                sh 'sudo rm -rf ${DEPLOY_PATH}/*'
            }
        }

        stage('Deploy') {
            steps {
                sh 'sudo cp -r dist/* ${DEPLOY_PATH}'
            }
        }
    }

    post {
        always {
            discordSend description: '${currentBuild.currentResult} - Jenkins Pipeline for ${env.JOB_NAME}',
                footer: 'Build ${env.BUILD_DISPLAY_NAME} for production branch',
                link: env.BUILD_URL,
                result: currentBuild.currentResult,
                title: env.JOB_NAME,
                webhookURL: '${env.DISCORD_WEBHOOK}'
        }
    }
}
