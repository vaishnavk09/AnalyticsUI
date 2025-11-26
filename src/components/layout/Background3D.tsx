import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Stars = (props: any) => {
    const ref = useRef<any>(null);

    const [sphere] = useState(() => {
        const temp = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2.4;
            const y = (Math.random() - 0.5) * 2.4;
            const z = (Math.random() - 0.5) * 2.4;
            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    });

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#06b6d4"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default Background3D;
