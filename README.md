## Description

This is the Kubernetes VR web front-end.  For a detailed look into this project, please look at the [Building the Kubernetes VR experience](http://medium.com).

This project was built for the 2016 Cloud Native Conference (Kubecon).  It is *very experimental*.

You can watch my [presentation at Kubecon on Youtube](https://www.youtube.com/watch?v=RyKzTb0Q0O4).

![K8sVr](http://i.giphy.com/l3vR5ZXdynIPI1uI8.gif)

## Dependencies

Hardware:
* Windows machine with Vive headset.

Software:
* A Kubernetes Cluster,  I recommend trying this out with [Minikube](https://github.com/kubernetes/minikube)
* The [Kubernetes VR API service](https://github.com/thenayr/kubernetes-vr-api)
* `kubectl proxy` running to connect to the local Kubernetes Cluster
* [Chrome WebVR enabled build from September 17](https://drive.google.com/drive/u/1/folders/0BzudLt22BqGRNTlfUlVWQXgxTmM)

I am running all of the software locally on my Mac and connecting to my Mac's DNS name directly from the Experimental chrome build on the Windows machine.  It's gross and complicated at the moment...

Note: You CAN run this without VR, you will be limited to WASD movement controls and currently can't interact with pods in any way.  

## Build and run

Install dependencies:

`npm install`

Run the webpack dev server

`npm run serve`

By default, this application makes the assumption that it can connect to Kubernetes via `localhost:8090`.  This means you will need to run `kubectl proxy --port=8090` in order to have the Kubernetes proxy available.

## Disclaimer

Everything here is *HIGHLY* experimental. I offer no gurantees of functionality and strongly advise you to *NOT* use this against any Kubernetes cluster that you don't consider completely disposable. Bad things can happen...
