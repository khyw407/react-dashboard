export default [
    {
        id: 1,
        name: 'terrifying-eel-nginx-ingress-controller-7cbbb8844',
        label: 'app:nginx-ingress-controllerchart:nginx-ingress-controller-5.0.7component:controllerpod-template-hash:7cbbb8844release:terrifying-eel',
        pod: '1/1',
        creationTimestamp: '2019-10-16 06:42:17',
        image: 'docker.io/bitnami/nginx-ingress-controller:0.26.1-debian-9-r0'
    },
    {
        id: 2,
        name: 'terrifying-eel-nginx-ingress-controller-default-backend-fcffd887',
        label: 'app:nginx-ingress-controllercomponent:default-backendpod-template-hash:fcffd887release:terrifying-eel',
        pod: '1/1',
        creationTimestamp: '2019-10-16 06:42:17',
        image: 'docker.io/bitnami/nginx:1.16.1-debian-9-r61'
    },
    {
        id: 3,
        name: 'cert-manager-cert-manager-77558cbf86',
        label: 'app:cert-managerpod-template-hash:77558cbf86release:cert-manager',
        pod: '1/1',
        creationTimestamp: '2019-10-16 06:24:27',
        image: 'quay.io/jetstack/cert-manager-controller:v0.3.0'
    },
    {
        id: 4,
        name: 'kube-dns-77f747b66b',
        label: 'k8s-app:kube-dnspod-template-hash:77f747b66b',
        pod: '4/4',
        creationTimestamp: '2019-10-16 05:10:40',
        image: 'icn.ocir.io/odx-oke/oke-public/k8s-dns-kube-dns-amd64:1.14.5'
    },
    {
        id: 5,
        name: 'kube-dns-autoscaler-668d96b8b',
        label: 'k8s-app:kube-dns-autoscalerpod-template-hash:668d96b8b',
        pod: '1/1',
        creationTimestamp: '2019-10-16 05:10:40',
        image: 'icn.ocir.io/odx-oke/oke-public/cluster-proportional-autoscaler-amd64:1.1.1'
    }
];