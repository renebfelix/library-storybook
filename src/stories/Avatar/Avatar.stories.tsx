import { Meta, StoryObj} from '@storybook/react';
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
    title: 'Componentes/Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        children: "Rene Felix"
    }
}