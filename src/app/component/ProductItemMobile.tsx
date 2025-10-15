import React from 'react';
import { ProductItemProps } from '../helper/type';
import Image from 'next/image';

const ProductItemMobile: React.FC<ProductItemProps> = ({ item }) => {
    return (
        <section className="w-full h-screen overflow-y-auto px-4 py-8">
            {/* Single Column for Mobile */}
            <div className="flex flex-col gap-6">
                {item.map((product, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow p-4 border border-gray-200 flex flex-col items-center"
                    >
                        <Image
                            src={product.image}
                            alt={product.titleItem}
                            width={80}
                            height={80}
                            className="mb-3 object-contain rounded"
                        />
                        <h2 className="text-base font-semibold mb-2 text-center text-[#060606]">{product.titleItem}</h2>
                        <p className="text-xs text-gray-700 mb-2 text-center">{product.description}</p>
                        <div className="text-xs text-gray-500 mb-2 text-center">{product.buildWith}</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {product.link?.map((l, i) => (
                                <React.Fragment key={i}>
                                    {l.appstore && (
                                        <a
                                            href={l.appstore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            {l.linkTitle}
                                        </a>
                                    )}
                                    {l.playstore && (
                                        <a
                                            href={l.playstore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 underline"
                                        >
                                            {l.linkTitle}
                                        </a>
                                    )}
                                    {!l.appstore && !l.playstore && (
                                        <span>{l.linkTitle}</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductItemMobile;