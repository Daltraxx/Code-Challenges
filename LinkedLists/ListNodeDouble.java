package LinkedLists;

public class ListNodeDouble {
  int val;
  ListNodeDouble prev;
  ListNodeDouble next;

  public ListNodeDouble(int val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }

  public ListNodeDouble(int val, ListNodeDouble prev, ListNodeDouble next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}
