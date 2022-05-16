import alfy from "alfy";
import ip from "ip";

const localNetWork = ip.address();

alfy.output([
    {
        title: "局域网地址：" + localNetWork,
        subtitle: "Press ⌘L to see the full error and ⌘C to copy it.",
        arg: localNetWork
    }
]);