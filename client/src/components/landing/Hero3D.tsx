import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { Quaternion, Euler, AnimationMixer } from 'three';

function Hero3D() {

    
    return (
        <section className="h-96 md:mt-6 -mb-12">
            <Canvas camera={{position:[0,1,25],fov:15}}>
                <ambientLight intensity={1} color={0xffffff} />
                <Models/>
            </Canvas>
        </section>
    )
}

export default Hero3D;

function Models ()
{
    const gltf = useGLTF('/models.glb');

    const animationMixer = useRef<AnimationMixer>();

    useFrame((state,delta)=>{

        if(!animationMixer.current) {
            animationMixer.current = new AnimationMixer(gltf.scene);
            for(let clip of gltf.animations) {
                animationMixer.current.clipAction(clip).play();
            }
        }

        animationMixer.current.update(delta);

        const { x, y } = state.pointer;
        const swayAmount = 0.015; // Adjust the amount of sway

        const targetRotation = new Quaternion().setFromEuler(
            new Euler(
                y * swayAmount,
                -x * swayAmount,
                0
            )
        );

        // Smoothly interpolate the camera's rotation towards the target rotation
        state.camera.quaternion.slerp(targetRotation, 0.1);
    })

    return <primitive object={gltf.scene} scale={3}/>
}