import { FC } from 'react';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface FilterBarProps {}

const FilterBar: FC<FilterBarProps> = ({}) => {
    return (
        <div className="w-40 sticky top-24 h-max">
            <div className="flex flex-col gap-5">
                <div className="ml-2">Color</div>
                <RadioGroup defaultValue="comfortable">
                    <div className="grid grid-cols-6 gap-3 items-center space-x-2">
                        <RadioGroupItem
                            className="ml-2"
                            value="default"
                            id="r1"
                        />
                        <RadioGroupItem
                            className="bg-red-500 border-red-500"
                            value="red"
                            id="r2"
                        />
                        <RadioGroupItem
                            className="bg-blue-500 border-blue-500"
                            value="blue"
                            id="r3"
                        />
                        <RadioGroupItem
                            className="bg-green-500 border-green-500"
                            value="green"
                            id="r4"
                        />
                        <RadioGroupItem
                            className="bg-pink-500 border-pink-500"
                            value="pink"
                            id="r5"
                        />
                        <RadioGroupItem
                            className="bg-yellow-500 border-yellow-500"
                            value="yellow"
                            id="r6"
                        />
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
};

export default FilterBar;
