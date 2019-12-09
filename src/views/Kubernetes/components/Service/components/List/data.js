export default [
    {
      id: 1,
      name: 'component:apiserverprovider:kubernetes',
      label: 'app:flanneltier:node',
      clusterIP: '10.96.0.1',
      internalEndpoint: 'kubernetes.default:443',
      creationTimestamp: '2019-10-16 05:10:39',
    },
    {
      id: 2,
      name: 'terrifying-eel-nginx-ingress-controller',
      label: 'app:nginx-ingress-controllerchart:nginx-ingress-controller-5.0.7component:controllerheritage:Tillerrelease:terrifying-eel',
      clusterIP: '10.96.193.30',
      internalEndpoint: 'terrifying-eel-nginx-ingress-controller.default:80terrifying-eel-nginx-ingress-controller.default:443',
      creationTimestamp: '2019-10-16 05:10:36'
    },
    {
      id: 3,
      name: 'terrifying-eel-nginx-ingress-controller-default-backend',
      label: 'app:nginx-ingress-controllerchart:nginx-ingress-controller-5.0.7component:default-backendheritage:Tillerrelease:terrifying-eel',
      clusterIP: '10.96.80.242',
      internalEndpoint: 'terrifying-eel-nginx-ingress-controller-default-backend.default:80',
      creationTimestamp: '2019-10-16 05:10:38'
    },
    {
      id: 4,
      name: 'kube-dns',
      label: 'addonmanager.kubernetes.io/mode:Reconcilek8s-app:kube-dnskubernetes.io/cluster-service:truekubernetes.io/name:KubeDNS',
      clusterIP: '10.96.5.5',
      internalEndpoint: 'kube-dns.kube-system:53kube-dns.kube-system:53',
      creationTimestamp: '2019-10-16 05:10:39',
    }
];