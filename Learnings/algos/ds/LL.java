class LinkedList {
    Node head;

    static class Node {
        int value;
        Node next;

        Node(int d){
            value = d;
            next = null;
        }
    }

    static class DoubleNode {
        int value;
        DoubleNode prev;
        DoubleNode next;

        DoubleNode(int val) {
            value = val;
            prev = null;
            next = null;
        }
    }


    public static void main(String[] args){
        LinkedList list = new LinkedList();
        list.head = new Node(1);
        Node second = new Node(2);
        list.head.next = second;
        second.next = new Node(3);
        System.out.println(list.head.value);
    }
}