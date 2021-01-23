pipeline {
  agent {
    docker {
      image 'node:alpine'
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
