import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import tfImage from '@site/static/img/terraform.png';
import k8sImage from '@site/static/img/kubernetes.png';
import cmpImage from '@site/static/img/compose.png';
import glImage from '@site/static/img/gitlab.png';
import ghImage from '@site/static/img/github.png';
import argoImage from '@site/static/img/argo.png';


const FeatureList = [
    {
        title: '',
        Img: tfImage,
        width: '100px',
        description: (<></>),
    },
    {
        title: '',
        Img: k8sImage,
        width: '160px',
        description: (<></>),
    },
    {
        title: '',
        Img: cmpImage,
        width: '160px',
        description: (<></>),
    },
    {
        title: '',
        Img: glImage,
        width: '150px',
        description: (<></>),
    },
    {
        title: '',
        Img: ghImage,
        width: '150px',
        description: (<></>),
    },
    {
        title: '',
        Img: argoImage,
        width: '80px',
        description: (<></>),
    },
];

function Feature({ Img, title, width, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={Img} width={width} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div>
                    <h2 style={{ textAlign: 'center' }}>Write once and deploy with</h2>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
