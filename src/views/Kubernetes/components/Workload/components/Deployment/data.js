export default [
  {
    id: 1,
    name: 'terrifying-eel-nginx-ingress-controller',
    label: 'app:nginx-ingress-controllerchart:nginx-ingress-controller-5.0.7component:controllerheritage:Tillerrelease:terrifying-eel',
    pod: '1/1',
    creationTimestamp: '2019-10-16 06:42:17',
    image: 'docker.io/bitnami/nginx-ingress-controller:0.26.1-debian-9-r0'
  },
  {
    id: 2,
    name: 'terrifying-eel-nginx-ingress-controller-default-backend',
    label: 'app:nginx-ingress-controllerchart:nginx-ingress-controller-5.0.7component:default-backendheritage:Tillerrelease:terrifying-eel',
    pod: '1/1',
    creationTimestamp: '2019-10-16 06:42:17',
    image: 'docker.io/bitnami/nginx:1.16.1-debian-9-r61'
  },
  {
    id: 3,
    name: 'cert-manager-cert-manager',
    label: 'app:cert-managerchart:cert-manager-v0.3.1heritage:Tillerrelease:cert-manager',
    pod: '1/1',
    creationTimestamp: '2019-10-16 06:24:27',
    image: 'quay.io/jetstack/cert-manager-controller:v0.3.0'
  },
  {
    id: 4,
    name: 'kube-dns',
    label: 'addonmanager.kubernetes.io/mode:Reconcilek8s-app:kube-dnskubernetes.io/cluster-service:true',
    pod: '4/4',
    creationTimestamp: '2019-10-16 05:10:40',
    image: 'icn.ocir.io/odx-oke/oke-public/k8s-dns-kube-dns-amd64:1.14.5'
  },
  {
    id: 5,
    name: 'kube-dns-autoscaler',
    label: 'k8s-app:kube-dns-autoscaler',
    pod: '1/1',
    creationTimestamp: '2019-10-16 05:10:40',
    image: 'icn.ocir.io/odx-oke/oke-public/cluster-proportional-autoscaler-amd64:1.1.1'
  }
];