pipeline {
  agent {
    docker {
      image 'node:12.14.1-alpine'
      args '-p 3133:3133'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
}
